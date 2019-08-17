import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Card } from '../../models/card';
import { InsertContainerDirective } from 'src/app/directives/insert-container.directive';
import { CardTitleComponent } from '../card-elements/card-title/card-title.component';
import { CardSubtitleComponent } from '../card-elements/card-subtitle/card-subtitle.component';
import { CardRuleComponent } from '../card-elements/card-rule/card-rule.component';
import { CardAttributeComponent } from '../card-elements/card-attribute/card-attribute.component';
import { CardSpaceComponent } from '../card-elements/card-space/card-space.component';
import { CardHeadingComponent } from '../card-elements/card-heading/card-heading.component';
import { CardElementInterface } from '../card-elements/card-element.interface';

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

    console.log(command);
    switch (command) {
      case 'title':
        this.createInstanceAndPassContent(CardTitleComponent, content, container);
        break;
      case 'subtitle':
        this.createInstanceAndPassContent(CardSubtitleComponent, content, container);
        break;
      case 'rule':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CardRuleComponent);
        container.createComponent(componentFactory);
        break;
      case 'attribute':
        this.createInstanceAndPassContent(CardAttributeComponent, content, container);
        break;
      case 'heading':
        this.createInstanceAndPassContent(CardHeadingComponent, content, container);
        break;
      case 'text':
        break;
      default:
      case '':
      case 'space':
        this.createInstanceAndPassContent(CardSpaceComponent, content, container);
      break;
    }
  }

  createInstanceAndPassContent(component: any, content: string, container: ViewContainerRef): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = container.createComponent(componentFactory);
    (<CardElementInterface>componentRef.instance).parseContent(content);
  }
}
