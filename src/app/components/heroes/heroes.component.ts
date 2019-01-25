import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  hero: Card = {
      id: 1,
      name: 'Windstorm',
  };

  cards: Card[];
  selectedCard: Card;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }
}
