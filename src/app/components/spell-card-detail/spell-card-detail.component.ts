import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Card } from '../../models/card';
import { InsertContainerDirective } from 'src/app/directives/insert-container.directive';
import { CardTitleComponent } from '../card-elements/card-title/card-title.component';
import { CardSubtitleComponent } from '../card-elements/card-subtitle/card-subtitle.component';
import { CardRuleComponent } from '../card-elements/card-rule/card-rule.component';

@Component({
  selector: 'app-spell-card-detail',
  templateUrl: './spell-card-detail.component.html',
  styleUrls: ['./spell-card-detail.component.css'],
  entryComponents: [
    CardTitleComponent,
    CardSubtitleComponent,
    CardRuleComponent ]
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

      let commandEnd = line.indexOf(' ');
      if (commandEnd <= 0) {
        commandEnd = line.length;
      }

      const firstWord = line.substring(0, commandEnd).toLowerCase();
      const content = line.substring(commandEnd + 1, line.length);
      this.processLayoutString(firstWord, content, viewContainerRef);
    }
  }

  processLayoutString(command: string, content: string, container: ViewContainerRef): void {
    let componentFactory;
    let componentRef;

    console.log(command);
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
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardRuleComponent);
        container.createComponent(componentFactory);
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
    }
  }
}
