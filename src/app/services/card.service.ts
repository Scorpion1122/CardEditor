import { Injectable, OnDestroy } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { environment } from './../../environments/environment';

import { CARDS } from '../models/mock-cards';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnDestroy {

  getCardsUrl = '/v1/cards/get_all';

  cards: Card[] = CARDS;
  cardsUpdated: Subject<Card[]>;

  loginSubscription: Subscription;
  logoutSubscription: Subscription;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.cardsUpdated = new Subject<Card[]>();

    this.logoutSubscription = this.authService.getOnLogout().subscribe(_ => { this.clearAllLocalData(); });
    this.loginSubscription = this.authService.getOnLogin().subscribe(_ => { this.loadAllCardData(); } );
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
    this.logoutSubscription.unsubscribe();
  }

  clearAllLocalData() {
    this.cards = [];
    console.log('login event! Clear All Card Data');
  }

  loadAllCardData() {

    const url = environment.apiUrl + this.getCardsUrl;
    this.http.get(url, environment.httpOptions)
      .subscribe((data) => {
        console.log(data);
    });
  }

  createNewCard(): Observable<Card> {
    const newCard: Card = new Card();
    for (const card of this.cards) {
      if (card.id <= newCard.id) {
        newCard.id = card.id + 1;
      }
    }
    this.cards.push(newCard);
    return of(newCard);
  }

  getCards(): Observable<Card[]> {
    const observable = of(this.cards);
    observable.subscribe(cards => {
    });
    return observable;
  }

  getCard(id: number): Observable<Card> {
    const card = this.cards.find(x => x.id === id);
    return of(card);
  }

  setCards(newCards: Card[]) {
    this.cards.splice(0, this.cards.length);
    for (const card of newCards) {
      this.cards.push(card);
    }
    this.cardsUpdated.next(this.cards);
  }

  deleteCard(card: Card) {
    const index = this.cards.indexOf(card);
    this.cards.splice(index, 1);
  }
}
