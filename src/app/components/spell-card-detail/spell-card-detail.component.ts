import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Card } from '../../models/card';
import { InsertContainerDirective } from 'src/app/directives/insert-container.directive';
import { CardTitleComponent } from '../card-elements/card-title/card-title.component';
import { CardSubtitleComponent } from '../card-elements/card-subtitle/card-subtitle.component';

@Component({
  selector: 'app-spell-card-detail',
  templateUrl: './spell-card-detail.component.html',
  styleUrls: ['./spell-card-detail.component.css'],
  entryComponents: [ CardTitleComponent, CardSubtitleComponent ]
})

export class SpellCardDetailComponent implements OnInit {

  @ViewChild(InsertContainerDirective) insertDirective: InsertContainerDirective;
  @Input() card: Card;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.parseAndCreateLayoutContent();
  }

  public parseAndCreateLayoutContent() {
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
    let componentFactory;
    let componentRef;

    switch (command) {
      default:
        // Error
        break;
      case 'title':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardTitleComponent);
        componentRef = container.createComponent(componentFactory);
        (<CardTitleComponent>componentRef.instance).content = content;
        break;
      case 'rule':
        break;
      case 'subtitle':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardSubtitleComponent);
        componentRef = container.createComponent(componentFactory);
        (<CardSubtitleComponent>componentRef.instance).content = content;
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
