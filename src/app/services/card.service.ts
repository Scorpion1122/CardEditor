import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { CARDS } from '../models/mock-cards';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

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
}
