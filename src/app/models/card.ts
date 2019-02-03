import { CardProperty } from './card.property';

export class Card {
    id: number;
    name: string;
    subTitle: string;
    properties: CardProperty[];
    content: string;
    atHigherLevel: string;
    borderColor: string;
    tags: string[];

    constructor() {
        this.id = 1;
        this.name = 'New Card';
        this.subTitle = '';
        this.properties = [];
        this.content = '';
        this.atHigherLevel = '';
        this.borderColor = '#444444';
        this.tags = [];
    }
}
