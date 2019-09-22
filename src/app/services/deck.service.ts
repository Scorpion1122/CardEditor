import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of } from 'rxjs';
import { Deck } from '../models/deck';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  currentDeck: Deck = new Deck();

  constructor(private cardService: CardService) {

  }

  setCardsInDeck(cards: Card[]) {
    this.currentDeck.clearSelection();
    for (const card of cards) {
      this.currentDeck.selection.push(card._id);
    }
  }

  getCardsInCurrentDeck(): Observable<Card[]> {
    const cards = [];
    for (const card of this.cardService.cards) {
      if (this.currentDeck.selection.indexOf(card._id) >= 0) {
        cards.push(card);
      }
    }
    return of(cards);
  }
}
