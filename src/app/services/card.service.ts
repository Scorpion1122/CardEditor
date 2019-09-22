import { Injectable, OnDestroy } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { environment } from './../../environments/environment';

import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { ExportImportService } from './export-import.service';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnDestroy {

  getCardsUrl = '/v1/cards/get_all';

  cards: Card[] = [];
  cardsUpdated: Subject<Card[]>;

  loginSubscription: Subscription;
  logoutSubscription: Subscription;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.cardsUpdated = new Subject<Card[]>();

    this.logoutSubscription = this.authService.getOnLogout().subscribe(_ => { this.clearAllLocalData(); });
    this.loginSubscription = this.authService.getOnLogin()
      .subscribe(_ => {
          this.apiLoadAllCardData();
        });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
    this.logoutSubscription.unsubscribe();
  }

  clearAllLocalData() {
    this.cards = [];
    console.log('login event! Clear All Card Data');
  }

  apiLoadAllCardData() {
    const url = environment.apiUrl + this.getCardsUrl;
    this.http.get(url, environment.httpOptions)
      .subscribe((data) => {
        if (!Array.isArray(data)) {
          return;
        }

        for (const cardData of data) {
          const card = this.createCardFromJsonData(cardData);
          if (card !== null) {
            this.cards.push(card);
          }
        }
        this.cardsUpdated.next(this.cards);
    });
  }

  createCardFromJsonData(jsonData) {
    if (typeof jsonData.name === 'undefined') {
      return null;
    }

    const card = new Card();
    card._id = jsonData._id;
    card.name = jsonData.name;
    card.tags = jsonData.tags;
    card.layoutText = jsonData.layoutText;

    if (typeof jsonData.borderColor !== 'undefined'
      && typeof jsonData.borderColor.hex !== 'undefined') {
      card.borderColor.hex = jsonData.borderColor.hex;
    }
    return card;
  }

  createNewCard(): Observable<Card> {
    const newCard: Card = new Card();
    for (const card of this.cards) {
      if (card._id <= newCard._id) {
        newCard._id = card._id + 1;
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

  getCard(_id: String): Observable<Card> {
    const card = this.cards.find(x => x._id === _id);
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
