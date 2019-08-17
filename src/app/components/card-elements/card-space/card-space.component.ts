import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card-space',
  templateUrl: './card-space.component.html',
  styleUrls: ['./card-space.component.css']
})
export class CardSpaceComponent {

  @ViewChild('spaceElement') spaceElement: ElementRef;

  constructor(private renderer: Renderer2) { }

  public parseContent(content: string) {
    let spacing = 2;
    if (content !== undefined) {
      spacing = parseFloat(content);
    }

    this.renderer.setStyle(this.spaceElement.nativeElement, 'padding-top', spacing + 'mm');
  }
}
