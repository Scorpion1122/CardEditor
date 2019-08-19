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

    let newAbilityScores = [];
    if (scores.length > 0) {
      newAbilityScores.push(new AbilityScore(AbilityScoreType.STR, parseInt(scores[0])));
    }
    if (scores.length > 1) {
      newAbilityScores.push(new AbilityScore(AbilityScoreType.DEX, parseInt(scores[1])));
    }
    if (scores.length > 2) {
      newAbilityScores.push(new AbilityScore(AbilityScoreType.CON, parseInt(scores[2])));
    }
    if (scores.length > 3) {
      newAbilityScores.push(new AbilityScore(AbilityScoreType.INT, parseInt(scores[3])));
    }
    if (scores.length > 4) {
      newAbilityScores.push(new AbilityScore(AbilityScoreType.WIS, parseInt(scores[4])));
    }
    if (scores.length > 5) {
      newAbilityScores.push(new AbilityScore(AbilityScoreType.CHA, parseInt(scores[5])));
    }
    this.abilityScores = newAbilityScores;
  }

}
