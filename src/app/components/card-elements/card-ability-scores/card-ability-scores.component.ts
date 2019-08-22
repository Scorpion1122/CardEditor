import { Component, OnInit, Input } from '@angular/core';
import { AbilityScore } from 'src/app/models/ability-score';
import { CardElementInterface } from '../card-element.interface';
import { AbilityScoreType } from 'src/app/models/ability-score-type';

@Component({
  selector: 'app-card-ability-scores',
  templateUrl: './card-ability-scores.component.html',
  styleUrls: ['./card-ability-scores.component.css']
})
export class CardAbilityScoresComponent implements CardElementInterface {

  @Input() abilityScores: AbilityScore[];

  parseContent(content: string): void {
    const scores = content.split(' ');

    const newAbilityScores = [];
    if (scores.length > 0) {
      this.tryAddAbilityScore(newAbilityScores, AbilityScoreType.STR, scores[0]);
    }
    if (scores.length > 1) {
      this.tryAddAbilityScore(newAbilityScores, AbilityScoreType.DEX, scores[1]);
    }
    if (scores.length > 2) {
      this.tryAddAbilityScore(newAbilityScores, AbilityScoreType.CON, scores[2]);
    }
    if (scores.length > 3) {
      this.tryAddAbilityScore(newAbilityScores, AbilityScoreType.INT, scores[3]);
    }
    if (scores.length > 4) {
      this.tryAddAbilityScore(newAbilityScores, AbilityScoreType.WIS, scores[4]);
    }
    if (scores.length > 5) {
      this.tryAddAbilityScore(newAbilityScores, AbilityScoreType.CHA, scores[5]);
    }
    this.abilityScores = newAbilityScores;
  }

  tryAddAbilityScore(abilityScores: AbilityScore[], abilityScoreType: AbilityScoreType, content: string) {
    const score = parseInt(content, 10);
    if (isNaN(score)) {
      return;
    }
    abilityScores.push(new AbilityScore(abilityScoreType, score));
  }
}
