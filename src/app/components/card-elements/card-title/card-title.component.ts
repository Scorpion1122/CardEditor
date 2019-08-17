import { Component, Input } from '@angular/core';
import { CardElementInterface } from '../card-element.interface';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements CardElementInterface {

  @Input() content: string;

  parseContent(content: string): void {
    this.content = content;
  }
}
