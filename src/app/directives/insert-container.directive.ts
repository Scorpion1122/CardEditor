import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[insert-container]'
})
export class InsertContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
