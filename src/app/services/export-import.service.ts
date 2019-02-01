import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import * as FileSaver from 'file-saver';
import { Card } from '../models/card';
import { CardProperty } from '../models/card.property';

@Injectable({
  providedIn: 'root'
})
export class ExportImportService {

  cards: Card[] = [];

  constructor(private cardService: CardService) {
   }

   exportCardData() {
    this.cardService.getCards()
    .subscribe(cards => {
      const data = JSON.stringify(cards);
      const blob = new Blob([data], { type: 'text/plain' });
      FileSaver.saveAs(blob, 'card collection.json');
    });
   }

   importCardData(file: File) {
      const fileReader = new FileReader();
      fileReader.onloadend = (event: any) => {
        this.importJsonCardData(event.target.result);
      };
      fileReader.readAsText(file);
   }

   importJsonCardData(json: string) {
    const data = JSON.parse(json);
    for (const cardData of data) {
      if (typeof cardData.name === 'undefined') {
        continue;
      }

      const card = new Card();
      card.id = cardData.id;
      card.name = cardData.name;
      card.subTitle = cardData.subTitle;
      card.content = cardData.content;
      card.atHigherLevel = cardData.atHigherLevel;
      card.tags = cardData.tags;

      if (typeof cardData.properties.name !== 'undefined') {
        for (const propertyData of cardData.properties) {
          const property = new CardProperty();
          property.name = propertyData.name;
          property.value = propertyData.value;
          card.properties.push(property);
        }
      }

      console.log(card);
    }
   }
}
