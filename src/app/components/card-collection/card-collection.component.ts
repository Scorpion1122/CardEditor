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
    this.selection.onChange.subscribe(_ => {});
  }

  ngOnInit() {
    this.cardService.getCards()
      .subscribe(cards => this.onCardsRetrieved(cards));

    this.deckService.getCardsInCurrentDeck()
      .subscribe(cards => {
        this.selection.clear();
        for (const card of cards) {
          this.selection.select(card);
        }
      });
  }

  onCardsRetrieved(cards: Card[]) {
    this.dataSource = new MatTableDataSource(cards);
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
