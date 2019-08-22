import { Card } from './card';
import { Color } from './color';
import { CardSize } from './card-size';

export const CARDS: Card[] = [
    {
      id: 11,
      name: 'Eldritch Blast',
      borderColor: new Color('#444444'),
      tags: [
        'Evocation',
        'Cantrip',
        'Spell',
        '1st Level'
      ],
      cardSizeType: CardSize.Poker,
      // tslint:disable-next-line:max-line-length
      layoutText: 'title Eldritch Blast\nsubtitleEvocation cantrip\nattribute Casting Time | 1 Action\nattribute Duration | 1 Minute\ntext You use your action to create a beam of magical energy and hurl it at a creature you can see within range. Make a ranged spell attack. On hit, the target takes 1d10 force damage.\nheading At Higher Level\ntext The spell creates more beams as you level. At 5th, it makes two beams; at 11th, it makes three; and at 17th, it makes four. The beams can be directed at the same target or different ones. Each beam gets its own attack roll.\nability-scores 18 12 2 14 8 29',
    },
    {
      id: 12,
      name: 'Turn the Faithless',
      borderColor: new Color('#444444'),
      tags: [
        'Paladin',
        'Feature'
      ],
      cardSizeType: CardSize.Poker,
      layoutText: 'title Turn the Faithless',
    }
];
