import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of, Subject } from 'rxjs';
import { MessageService } from './message.service';

import { CARDS } from '../models/mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = CARDS;
  cardsUpdated: Subject<Card[]>;

  constructor(private messageService: MessageService) {
    this.cardsUpdated = new Subject<Card[]>();
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
      this.messageService.add('CardService: fetched cards!');
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
