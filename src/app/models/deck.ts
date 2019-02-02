export class Deck {
  id: number;
  name: string;
  selection: number[];

  constructor() {
    this.id = 1;
    this.name = 'New Deck';
    this.selection = [11];
}

  clearSelection() {
    this.selection.splice(0, this.selection.length);
  }
}
