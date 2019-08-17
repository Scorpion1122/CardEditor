import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-subtitle',
  templateUrl: './card-subtitle.component.html',
  styleUrls: ['./card-subtitle.component.css']
})
export class CardSubtitleComponent {

  @Input() content: string;

  constructor() { }
}
