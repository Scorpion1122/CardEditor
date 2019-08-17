import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import * as FileSaver from 'file-saver';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class ExportImportService {

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
    const newCards = [];

    const data = JSON.parse(json);
    for (const cardData of data) {
      if (typeof cardData.name === 'undefined') {
        continue;
      }

      const card = new Card();
      card.id = cardData.id;
      card.name = cardData.name;
      card.tags = cardData.tags;
      card.layoutText = cardData.layoutText;

      if (typeof cardData.borderColor !== 'undefined'
        && typeof cardData.borderColor.hex !== 'undefined') {
        card.borderColor.hex = cardData.borderColor.hex;
      }

      newCards.push(card);
    }
    this.cardService.setCards(newCards);
   }
}
