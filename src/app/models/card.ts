import { CardProperty } from './card.property';

export class Card {
    id: number;
    name: string;
    subTitle: string;
    properties: CardProperty[];
    content: string;
    atHigherLevel: string;
    tags: string[];
}
