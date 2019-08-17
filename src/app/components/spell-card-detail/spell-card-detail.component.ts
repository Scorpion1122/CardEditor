import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Card } from '../../models/card';
import { InsertContainerDirective } from 'src/app/directives/insert-container.directive';
import { CardTitleComponent } from '../card-elements/card-title/card-title.component';
import { CardSubtitleComponent } from '../card-elements/card-subtitle/card-subtitle.component';
import { CardRuleComponent } from '../card-elements/card-rule/card-rule.component';
import { CardAttributeComponent } from '../card-elements/card-attribute/card-attribute.component';
import { CardSpaceComponent } from '../card-elements/card-space/card-space.component';
import { CardHeadingComponent } from '../card-elements/card-heading/card-heading.component';

@Component({
  selector: 'app-spell-card-detail',
  templateUrl: './spell-card-detail.component.html',
  styleUrls: ['./spell-card-detail.component.css'],
  entryComponents: [
    CardTitleComponent,
    CardSubtitleComponent,
    CardRuleComponent,
    CardAttributeComponent,
    CardSpaceComponent,
    CardHeadingComponent ]
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

    const layoutText = this.card.layoutText.trim();
    const lines = layoutText.split('\n');
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
      case 'title':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardTitleComponent);
        componentRef = container.createComponent(componentFactory);
        (<CardTitleComponent>componentRef.instance).content = content;
        break;
      case 'subtitle':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardSubtitleComponent);
        componentRef = container.createComponent(componentFactory);
        (<CardSubtitleComponent>componentRef.instance).content = content;
        break;
      case 'rule':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardRuleComponent);
        container.createComponent(componentFactory);
        break;
      case 'attribute':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardAttributeComponent);
        componentRef = container.createComponent(componentFactory);
        (<CardAttributeComponent>componentRef.instance).parseContent(content);
        break;
      case 'heading':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardHeadingComponent);
        componentRef = container.createComponent(componentFactory);
        (<CardHeadingComponent>componentRef.instance).parseContent(content);
        break;
      case 'text':
        break;
      default:
      case '':
      case 'space':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardSpaceComponent);
        componentRef = container.createComponent(componentFactory);
        (<CardSpaceComponent>componentRef.instance).parseContent(content);
      break;

    }
  }
}
