import { CardProperty } from './card.property';
import { Color } from './color';

export class Card {
    id: number;
    name: string;
    subTitle: string;
    properties: CardProperty[];
    content: string;
    atHigherLevel: string;
    borderColor: Color;
    tags: string[];

    layoutText: string;

    constructor() {
        this.id = 1;
        this.name = 'New Card';
        this.subTitle = '';
        this.properties = [];
        this.content = '';
        this.atHigherLevel = '';
        this.borderColor = new Color('#444444');
        this.tags = [];
        this.layoutText = '';
    }
}
