import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-heading',
  templateUrl: './card-heading.component.html',
  styleUrls: ['./card-heading.component.css']
})
export class CardHeadingComponent {

  @Input() heading: string;

  constructor() { }

  public parseContent(content: string) {
    this.heading = content;
  }

}
