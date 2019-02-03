import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { PrintPageComponent } from '../print-page/print-page.component';
import { PrintablePageDirective } from 'src/app/directives/printable-page.directive';
import { CARDS } from '../../models/mock-cards';
import { Card } from '../../models/card';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-print-document',
  templateUrl: './print-document.component.html',
  styleUrls: ['./print-document.component.css'],
  entryComponents: [ PrintPageComponent ]
})
export class PrintDocumentComponent implements OnInit {

  @ViewChild(PrintablePageDirective) printDirective: PrintablePageDirective;
  cards: Card[] = CARDS;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private deckService: DeckService) { }

  ngOnInit() {
    this.deckService.getCardsInCurrentDeck().subscribe(cards => {
      this.populateDocumentWithCards(cards);
    });
  }

  populateDocumentWithCards(cards: Card[]) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PrintPageComponent);
    const viewContainerRef = this.printDirective.viewContainerRef;
    viewContainerRef.clear();

    const pageCount = Math.ceil(cards.length / 9);
    for (let i = 0; i < pageCount; i++) {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<PrintPageComponent>componentRef.instance).cards = cards.slice(i * 9, i * 9 + 9);
    }
  }

}
