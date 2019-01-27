import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { CARDS } from '../models/mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private messageService: MessageService) {
  }

  getCards(): Observable<Card[]> {
    const observable = of(CARDS);
    observable.subscribe(cards => {
      this.messageService.add('CardService: fetched cards!');
    });
    return observable;
  }

  getCard(id: number): Observable<Card> {
    const card = CARDS.find(x => x.id === id);
    return of(card);
  }
}
