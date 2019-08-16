import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-spell-card-detail',
  templateUrl: './spell-card-detail.component.html',
  styleUrls: ['./spell-card-detail.component.css']
})

export class SpellCardDetailComponent {

  @Input() card: Card;

  ngOnInit() {
    var lines = this.card.layoutText.split('\n');
    for(var i = 0; i < lines.length; i++)
    {
      var line = lines[i];
      var firstSpace = line.indexOf(' ');
      var firstWord = line.substring(0, firstSpace).toLowerCase();
      var content = line.substring(firstSpace + 1, line.length - firstSpace);
      this.processLayoutString(firstWord, content);
    }
  }

  processLayoutString(command: string, content: string): void {
    switch (command) {
      default:
        //Error
        break;
      case 'title':
        break;
      case 'rule':
        break;
      case 'subtext':
        break;
      case 'attribute':
        break;      
      case 'heading':
        break;
      case 'text':
        break;
      case 'titled-text':
        break;
    }
  }
}
