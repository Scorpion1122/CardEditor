export class Deck {
  id: number;
  name: string;
  selection: string[];

  constructor() {
    this.id = 1;
    this.name = 'New Deck';
    this.selection = [];
}

  clearSelection() {
    this.selection.splice(0, this.selection.length);
  }
}
