import { Component, Input } from '@angular/core';
import { CardElementInterface } from '../card-element.interface';

@Component({
  selector: 'app-card-attribute',
  templateUrl: './card-attribute.component.html',
  styleUrls: ['./card-attribute.component.css']
})
export class CardAttributeComponent implements CardElementInterface {

  @Input() name: string;
  @Input() description: string;

  public parseContent(content: string) {
    const splitContent = content.split('|');
    if (splitContent.length > 0) {
      this.name = splitContent[0].trim();
    }
    if (splitContent.length > 1) {
      this.description = splitContent[1].trim();
    }
  }
}
