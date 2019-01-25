import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})

export class CardCollectionComponent implements OnInit {

  displayedColumns: string[] = ['name', 'subTitle', 'tags'];
  dataSource: MatTableDataSource<Card>;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.cardService.getCards()
      .subscribe(cards => this.onCardsRetrieved(cards));
  }

  onCardsRetrieved(cards: Card[]) {
    this.dataSource = new MatTableDataSource(cards);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
