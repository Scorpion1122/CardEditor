import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { PrintPageComponent } from '../print-page/print-page.component';
import { PrintablePageDirective } from 'src/app/directives/printable-page.directive';
import { CARDS } from '../../models/mock-cards';
import { Card } from '../../models/card';

@Component({
  selector: 'app-print-document',
  templateUrl: './print-document.component.html',
  styleUrls: ['./print-document.component.css'],
  entryComponents: [ PrintPageComponent ]
})
export class PrintDocumentComponent implements OnInit {

  @ViewChild(PrintablePageDirective) printDirective: PrintablePageDirective;
  cards: Card[] = CARDS;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PrintPageComponent);
    const viewContainerRef = this.printDirective.viewContainerRef;
    viewContainerRef.clear();

    const pageCount = Math.ceil(this.cards.length / 9);
    for (var i = 0; i < pageCount; i++) {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<PrintPageComponent>componentRef.instance).cards = this.cards.slice(i * 9, i * 9 + 9);
    }
  }

}
