import { IColor } from '@bytelabsco/ngx-color-selector';

export class Color implements IColor {

  hex: string;

  constructor(hex: string) {
    this.hex = hex;
  }
}
