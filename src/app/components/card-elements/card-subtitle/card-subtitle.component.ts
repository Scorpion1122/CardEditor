import { Component, Input } from '@angular/core';
import { CardElementInterface } from '../card-element.interface';

@Component({
  selector: 'app-card-subtitle',
  templateUrl: './card-subtitle.component.html',
  styleUrls: ['./card-subtitle.component.css']
})
export class CardSubtitleComponent implements CardElementInterface {

  @Input() content: string;

  parseContent(content: string): void {
    this.content = content;
  }
}
