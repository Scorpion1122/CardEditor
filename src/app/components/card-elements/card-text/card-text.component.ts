import { Component, Input } from '@angular/core';
import { CardElementInterface } from '../card-element.interface';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.css']
})
export class CardTextComponent implements CardElementInterface {

  @Input() content: string;

  parseContent(content: string): void {
    this.content = content;
  }
}
