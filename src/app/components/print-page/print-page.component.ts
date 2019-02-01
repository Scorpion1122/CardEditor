import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { SpellCardDetailComponent } from '../spell-card-detail/spell-card-detail.component';
import { SpellCardDetailDirective } from 'src/app/directives/spell-card-detail.directive';
import { Card } from 'src/app/models/card';
import { CARDS } from 'src/app/models/mock-cards';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css'],
  entryComponents: [ SpellCardDetailComponent ]
})
export class PrintPageComponent implements OnInit {

  @ViewChild(SpellCardDetailDirective) cardDirective: SpellCardDetailDirective;
  @Input() cards: Card[] = CARDS;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpellCardDetailComponent);
    const viewContainerRef = this.cardDirective.viewContainerRef;
    viewContainerRef.clear();

    const cardsPerPage = 9;
    for (let i = 0; i < cardsPerPage; i++) {
      const componentRef = viewContainerRef.createComponent(componentFactory);

      if (i < this.cards.length) {
        (<SpellCardDetailComponent>componentRef.instance).card = this.cards[i];
      }
    }
  }
}
