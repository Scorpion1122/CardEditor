import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Card } from 'src/app/models/card';
import { CardService } from '../../services/card.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CardProperty } from 'src/app/models/card.property';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.css']
})
export class CardEditorComponent implements OnInit, OnDestroy {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  selectedCard: Card;
  getCardObservable: Observable<Card>;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService) {
  }

  ngOnInit() {
    this.getCardObservable = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cardService.getCard(+params.get('id')))
    );
    this.getCardObservable.subscribe(card => this.selectedCard = card);
  }

  removeProperty(index: number) {
    this.selectedCard.properties.splice(index, 1);
  }

  addNewProperty() {
    const newProperty: CardProperty = {
      name: 'name',
      value: 'value'
    };
    this.selectedCard.properties.push(newProperty);
  }

  updatePropertyName(index: number, event) {
    this.selectedCard.properties[index].name = event.target.value;
  }

  updatePropertyValue(index: number, event) {
    this.selectedCard.properties[index].value = event.target.value;
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
      this.location.back();
    }
  }

  ngOnDestroy(): void {
  }
}
