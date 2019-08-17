import { Color } from './color';

export class Card {
    id: number;
    name: string;
    borderColor: Color;
    tags: string[];

    layoutText: string;

    constructor() {
        this.id = 1;
        this.name = 'New Card';
        this.borderColor = new Color('#444444');
        this.tags = [];
        this.layoutText = '';
    }
}
