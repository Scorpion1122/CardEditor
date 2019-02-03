import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { MatTableDataSource} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})

export class CardCollectionComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name', 'subTitle', 'tags', 'edit'];
  dataSource: MatTableDataSource<Card>;
  selection: SelectionModel<Card>;
  filterValue: string;

  constructor(private cardService: CardService, private deckService: DeckService) {
    this.selection = new SelectionModel<Card>(true, []);
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.cardService.getCards()
      .subscribe(cards => this.onCardsRetrieved(cards));
    this.cardService.cardsUpdated.subscribe(cards => {
      this.onCardsRetrieved(cards);
    });

    this.selection.changed.subscribe(selectionChange => {
      this.onSelectionChange();
    });
  }

  onSelectionChange() {
    this.deckService.setCardsInDeck(this.selection.selected);
  }

  onCardsRetrieved(cards: Card[]) {
    this.dataSource.data = cards;

    this.deckService.getCardsInCurrentDeck()
      .subscribe(cardsInDeck => {
        this.selection.clear();
        for (const card of cardsInDeck) {
          this.selection.select(card);
        }
      });
  }

  selectTag(tag: string) {
    this.filterValue = tag;
    this.applyFilter(tag);
  }

  clearFilter() {
    this.filterValue = '';
    this.applyFilter('');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editCard(card: Card) {

  }
}
