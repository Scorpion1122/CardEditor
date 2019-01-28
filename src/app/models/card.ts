import { CardProperty } from './card.property';

export class Card {
    id: number;
    name: string;
    subTitle: string;
    properties: CardProperty[];
    content: string;
    atHigherLevel: string;
    tags: string[];

    constructor() {
        this.id = 1;
        this.name = 'New Card';
        this.subTitle = '';
        this.properties = [];
        this.content = '';
        this.atHigherLevel = '';
        this.tags = [];
    }
}
