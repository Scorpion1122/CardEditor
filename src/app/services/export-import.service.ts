import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import * as FileSaver from 'file-saver';

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
}
