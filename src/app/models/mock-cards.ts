import { Card } from './card';
import { CardProperty } from './card.property';

export const CARDS: Card[] = [
    {
      id: 11,
      name: 'Eldritch Blast',
      subTitle: 'Evocation cantrip',
      properties: [
        { name: 'Casting Time', value: '1 action'},
        { name: 'Duration', value: '1 minute'}
      ],
      content: 'You use your action to create a beam of magical energy and hurl it at a creature you can see within range. Make a ranged spell attack. On hit, the target takes 1d10 force damage.',
      atHigherLevel: 'The spell creates more beams as you level. At 5th, it makes two beams; at 11th, it makes three; and at 17th, it makes four. The beams can be directed at the same target or different ones. Each beam gets its own attack roll.',
      borderColor: '#444444',
      tags: [
        'Evocation',
        'Cantrip',
        'Spell',
        '1st Level'
      ]
    },
    {
      id: 12,
      name: 'Turn the Faithless',
      subTitle: 'Channel Divinity',
      properties: [
        { name: 'Casting Time', value: '1 action'},
        { name: 'Range', value: '30 feet'},
        { name: 'Duration', value: '1 minute'}
      ],
      content: 'Channel your divinity to utter ancient words that are painful for fey/fiends to hear. Each fey/fiend within range of you that can hear you must make a Wis saving throw. On a failed save, the creature is turned for the duration or until it take damage. A turned creature must move as far away as possible and cant take reactions. The only actions it can take are dash or dodge. Creatures true form is revealed.',
      atHigherLevel: '',
      borderColor: '#444444',
      tags: [
        'Paladin',
        'Feature'
      ]
    }
];
