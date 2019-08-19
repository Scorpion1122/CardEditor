import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef, Renderer2 } from '@angular/core';
import { Card } from '../../models/card';
import { InsertContainerDirective } from 'src/app/directives/insert-container.directive';
import { CardTitleComponent } from '../card-elements/card-title/card-title.component';
import { CardSubtitleComponent } from '../card-elements/card-subtitle/card-subtitle.component';
import { CardRuleComponent } from '../card-elements/card-rule/card-rule.component';
import { CardAttributeComponent } from '../card-elements/card-attribute/card-attribute.component';
import { CardSpaceComponent } from '../card-elements/card-space/card-space.component';
import { CardHeadingComponent } from '../card-elements/card-heading/card-heading.component';
import { CardElementInterface } from '../card-elements/card-element.interface';
import { CardTextComponent } from '../card-elements/card-text/card-text.component';
import { CardSize } from 'src/app/models/card-size';
import { CardPrimaryStatsComponent } from '../card-elements/card-primary-stats/card-primary-stats.component';
import { CardAbilityScoresComponent } from '../card-elements/card-ability-scores/card-ability-scores.component';

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
    CardHeadingComponent,
    CardTextComponent,
    CardPrimaryStatsComponent,
    CardAbilityScoresComponent ]
})

export class SpellCardDetailComponent implements OnInit {

  @ViewChild(InsertContainerDirective) insertDirective: InsertContainerDirective;
  @ViewChild('cardSizeContainer') cardSizeCntainer: ElementRef;

  @Input() card: Card;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.updateCardSize();
    this.parseAndCreateLayoutContent();
  }

  public updateCardSize() {
    this.renderer.removeClass(this.cardSizeCntainer.nativeElement, CardSize.Poker);
    this.renderer.removeClass(this.cardSizeCntainer.nativeElement, CardSize.Tarot);

    switch (this.card.cardSizeType) {
      case CardSize.Poker:
      this.renderer.addClass(this.cardSizeCntainer.nativeElement, CardSize.Poker);
      break;
      case CardSize.Tarot:
      this.renderer.addClass(this.cardSizeCntainer.nativeElement, CardSize.Tarot);
      break;
    }
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

    // TEMP
    this.createInstanceAndPassContent(CardPrimaryStatsComponent, '18 (natural armor) | 52 (10d10 + 2)', viewContainerRef);
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
      this.createInstanceAndPassContent(CardTextComponent, content, container);
        break;
      default:
      case '':
      case 'space':
        this.createInstanceAndPassContent(CardSpaceComponent, content, container);
      break;
      case 'abilityscores':
        this.createInstanceAndPassContent(CardAbilityScoresComponent, content, container);
    }
  }

  createInstanceAndPassContent(component: any, content: string, container: ViewContainerRef): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = container.createComponent(componentFactory);
    (<CardElementInterface>componentRef.instance).parseContent(content);
  }
}
