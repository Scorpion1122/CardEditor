import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[spell-card-detail]'
})
export class SpellCardDetailDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
