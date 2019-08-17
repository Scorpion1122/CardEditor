import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Card } from '../../models/card';
import { InsertContainerDirective } from 'src/app/directives/insert-container.directive';
import { CardTitleComponent } from '../card-elements/card-title/card-title.component';

@Component({
  selector: 'app-spell-card-detail',
  templateUrl: './spell-card-detail.component.html',
  styleUrls: ['./spell-card-detail.component.css'],
  entryComponents: [ CardTitleComponent ]
})

export class SpellCardDetailComponent implements OnInit {

  @ViewChild(InsertContainerDirective) insertDirective: InsertContainerDirective;
  @Input() card: Card;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const viewContainerRef = this.insertDirective.viewContainerRef;
    viewContainerRef.clear();

    const lines = this.card.layoutText.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const firstSpace = line.indexOf(' ');
      const firstWord = line.substring(0, firstSpace).toLowerCase();
      const content = line.substring(firstSpace + 1, line.length);
      this.processLayoutString(firstWord, content, viewContainerRef);
    }
  }

  processLayoutString(command: string, content: string, container: ViewContainerRef): void {
    switch (command) {
      default:
        // Error
        break;
      case 'title':
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardTitleComponent);
        const componentRef = container.createComponent(componentFactory);
        (<CardTitleComponent>componentRef.instance).content = content;
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
