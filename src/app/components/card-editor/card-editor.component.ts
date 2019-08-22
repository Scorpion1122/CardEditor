import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Card } from 'src/app/models/card';
import { CardService } from '../../services/card.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { SpellCardDetailComponent } from '../spell-card-detail/spell-card-detail.component';

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardEditorComponent implements OnInit, OnDestroy {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild(SpellCardDetailComponent) private cardComponent: SpellCardDetailComponent;

  highlightText: string;
  selectedCard: Card;
  getCardObservable: Observable<Card>;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.getCardObservable = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cardService.getCard(+params.get('id')))
    );
    this.getCardObservable.subscribe(card => {
      this.selectedCard = card;
      this.updateHighlightText(this.selectedCard.layoutText);
    });
  }

  removeTag(index: number) {
    this.selectedCard.tags.splice(index, 1);
  }

  addTag(event: MatChipInputEvent) {
    this.selectedCard.tags.push(event.value);
    event.input.value = '';
  }

  deleteCard() {
    if (confirm('Are you sure you want to delete ' + this.selectedCard.name)) {
      this.cardService.deleteCard(this.selectedCard);
      this.goBack();
    }
  }

  cardSizeChanged(input) {
    this.cardComponent.updateCardSize();
  }

  cardLayoutChange(input) {
    this.cardComponent.parseAndCreateLayoutContent();
    this.updateHighlightText(this.selectedCard.layoutText);
  }

  updateHighlightText(text: string) {
    const lines = text.split('\n');
    let result = '';
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      line = this.addMarkingToText(line, 'subtitle', 'keyword');
      line = this.addMarkingToText(line, 'title', 'keyword');
      line = this.addMarkingToText(line, 'rule', 'keyword');
      line = this.addMarkingToText(line, 'attribute', 'keyword');
      line = this.addMarkingToText(line, 'heading', 'keyword');
      line = this.addMarkingToText(line, 'text', 'keyword');
      line = this.addMarkingToText(line, 'space', 'keyword');
      line = this.addMarkingToText(line, 'ability-scores', 'keyword');
      line = this.addMarkingToText(line, '|', 'seperator');

      result += line + '</br>';
    }
    this.highlightText = result;
  }

  addMarkingToText(text: string, tag: string, cssClass: string): string {
    return text.replace(tag + ' ', `<span class="${cssClass}">${tag} </span>`);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
  }
}
