import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { PrintPageComponent } from '../print-page/print-page.component';
import { PrintablePageDirective } from 'src/app/directives/printable-page.directive';

@Component({
  selector: 'app-print-document',
  templateUrl: './print-document.component.html',
  styleUrls: ['./print-document.component.css'],
  entryComponents: [ PrintPageComponent ]
})
export class PrintDocumentComponent implements OnInit {

  @ViewChild(PrintablePageDirective) printDirective: PrintablePageDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PrintPageComponent);
    const viewContainerRef = this.printDirective.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
