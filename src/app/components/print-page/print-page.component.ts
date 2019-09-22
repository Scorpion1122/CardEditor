import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { SpellCardDetailComponent } from '../spell-card-detail/spell-card-detail.component';
import { SpellCardDetailDirective } from 'src/app/directives/spell-card-detail.directive';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css'],
  entryComponents: [ SpellCardDetailComponent ]
})
export class PrintPageComponent implements OnInit {

  @ViewChild(SpellCardDetailDirective) cardDirective: SpellCardDetailDirective;
  @Input() cards: Card[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpellCardDetailComponent);
    const viewContainerRef = this.cardDirective.viewContainerRef;
    viewContainerRef.clear();

    console.log(this.cards.length);
    for (let i = 0; i < this.cards.length; i++) {

      if (i < this.cards.length) {
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<SpellCardDetailComponent>componentRef.instance).card = this.cards[i];
      }
    }
  }
}
