import { Component, Input } from '@angular/core';
import { CardElementInterface } from '../card-element.interface';

@Component({
  selector: 'app-card-heading',
  templateUrl: './card-heading.component.html',
  styleUrls: ['./card-heading.component.css']
})
export class CardHeadingComponent implements CardElementInterface {

  @Input() heading: string;

  constructor() { }

  public parseContent(content: string) {
    this.heading = content;
  }

}
