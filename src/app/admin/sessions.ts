import { Session } from './session';
export const SESSIONITEMS: Session[] = [
  {
    id: 1,
    name: 'Web',
    track: 'MEAN Stack',
    date: new Date('2018-06-13'),
    duree: 3,
    address: 'Lyon',
    participants: 0,
    isCompleted: false,
  },
  {
    id: 2,
    name: 'Mobile',
    track: 'Angular et Ionic',
    date: new Date('2018-08-10'),
    duree: 5,
    address: 'Paris',
    participants: 0,
    isCompleted: false,
  },
  {
    id: 3,
    name: 'Web',
    track: 'NodeJS',
    date: new Date('2018-07/20'),
    duree: 5,
    address: 'Lyon',
    participants: 0,
    isCompleted: false,
  },
];
