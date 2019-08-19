import { AbilityScoreType } from './ability-score-type';

export class AbilityScore {
    type: AbilityScoreType;
    value: number;

    constructor(type: AbilityScoreType, value: number) {
        this.type = type;
        this.value = value;
    }

    public getModifier(): number {
        let modifier = (this.value - 10) / 2;
        modifier = Math.floor(modifier);
        return modifier;
    }

    public getModifierString(): string {
        let modifier = this.getModifier();
        if (modifier <= 0) {
            return modifier.toString();
        }
        return '+' + modifier;            
    }
}