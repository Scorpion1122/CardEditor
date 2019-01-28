import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[printable-page]'
})
export class PrintablePageDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
