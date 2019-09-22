import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { PrintPageComponent } from '../print-page/print-page.component';
import { PrintablePageDirective } from 'src/app/directives/printable-page.directive';
import { Card } from '../../models/card';
import { DeckService } from 'src/app/services/deck.service';
import { CardSize } from 'src/app/models/card-size';

@Component({
  selector: 'app-print-document',
  templateUrl: './print-document.component.html',
  styleUrls: ['./print-document.component.css'],
  entryComponents: [ PrintPageComponent ]
})
export class PrintDocumentComponent implements OnInit {

  @ViewChild(PrintablePageDirective) printDirective: PrintablePageDirective;
  cards: Card[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private deckService: DeckService) { }

  ngOnInit() {
    this.deckService.getCardsInCurrentDeck().subscribe(cards => {
      this.populateDocumentWithCards(cards);
    });
  }

  populateDocumentWithCards(cards: Card[]) {
    const viewContainerRef = this.printDirective.viewContainerRef;
    viewContainerRef.clear();

    let filteredCards = this.getAllCardsOfType(cards, CardSize.Poker);
    this.addPrintablePages(viewContainerRef, filteredCards, 9);

    filteredCards = this.getAllCardsOfType(cards, CardSize.Tarot);
    this.addPrintablePages(viewContainerRef, filteredCards, 6);
  }

  addPrintablePages(viewContainerRef: ViewContainerRef, cards: Card[], cardsPerPage: number) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PrintPageComponent);

    const pageCount = Math.ceil(cards.length / cardsPerPage);
    if (pageCount === 0) {
      return;
    }

    for (let i = 0; i < pageCount; i++) {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<PrintPageComponent>componentRef.instance).cards = cards.slice(i * cardsPerPage, i * cardsPerPage + cardsPerPage);
    }
  }

  getAllCardsOfType(cards: Card[], cardSize: CardSize): Card[] {
    const result = [];

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].cardSizeType === cardSize) {
        result.push(cards[i]);
      }
    }

    return result;
  }

}
