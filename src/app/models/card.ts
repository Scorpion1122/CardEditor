import { Color } from './color';
import { CardSize } from './card-size';

export class Card {
    id: number;
    name: string;
    borderColor: Color;
    tags: string[];
    cardSizeType: CardSize;

    layoutText: string;

    constructor() {
        this.id = 1;
        this.name = 'New Card';
        this.borderColor = new Color('#444444');
        this.tags = [];
        this.cardSizeType = CardSize.Poker;
        this.layoutText = '';
    }
}
