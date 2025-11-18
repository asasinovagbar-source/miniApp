export interface Casino {
  id: string;
  name: string;
  logoSrc: string;
  rating: number;
  bonus?: string;
  freeSpins?: string;
  deposit?: string;
  rank?: number;
}

export const casinos: Casino[] = [
  {
    id: 'pokerdom',
    name: 'POKERDOM',
    logoSrc: '/images/logos/pokerdom.svg',
    rating: 4.9,
    bonus: '',
    freeSpins: '',
    deposit: 'FS 100% + 3K',
    rank: 1
  },
  {
    id: '1win',
    name: '1WIN',
    logoSrc: '/images/logos/1win.svg',
    rating: 4.8,
    deposit: '500% Депозита',
    rank: 2
  },
  {
    id: 'melbet',
    name: 'MELBET',
    logoSrc: '/images/logos/melbet.svg',
    rating: 4.7,
    deposit: '30%',
    rank: 3
  },
  {
    id: '1xbet',
    name: '1XBET',
    logoSrc: '/images/logos/1xbet.svg',
    rating: 4.8,
    bonus: '',
    freeSpins: '',
    deposit: '200% + 50FS',
    rank: 4
  },
  {
    id: '1xslots',
    name: '1XSLOTS',
    logoSrc: '/images/logos/1xslots.svg',
    rating: 4.7,
    bonus: '150%',
    freeSpins: '',
    deposit: '',
    rank: 5
  },
  {
    id: 'vavada',
    name: 'VAVADA',
    logoSrc: '/images/logos/vavada.svg',
    rating: 4.6,
    bonus: '',
    freeSpins: '200FS',
    deposit: '',
    rank: 6
  },
  {
    id: 'betwinner',
    name: 'BETWINNER',
    logoSrc: '/images/logos/betwinner.svg',
    rating: 4.8,
    bonus: '100%',
    deposit: '',
    rank: 7
  },
  {
    id: 'mostbet',
    name: 'MOSTBET',
    logoSrc: '/images/logos/mostbet.webp',
    rating: 4.7,
    bonus: '',
    freeSpins: '',
    deposit: '125% + 250FS',
    rank: 8
  },
  {
    id: 'pinco',
    name: 'PINCO',
    logoSrc: '/images/logos/pinco.svg',
    rating: 4.6,
    bonus: '100%',
    freeSpins: '',
    deposit: '',
    rank: 9
  },
  {
    id: 'cactus',
    name: 'CACTUS',
    logoSrc: '/images/logos/cactus.svg',
    rating: 4.5,
    bonus: '',
    deposit: '150% Депозита',
    rank: 10
  },
  {
    id: 'beef',
    name: 'BEEF',
    logoSrc: '/images/logos/beef.svg',
    rating: 4.6,
    bonus: '',
    freeSpins: '',
    deposit: '200% + 75FS',
    rank: 11
  },
  {
    id: 'vodka',
    name: 'VODKA',
    logoSrc: '/images/logos/vodka.svg',
    rating: 4.7,
    bonus: '',
    freeSpins: '150FS',
    deposit: '',
    rank: 12
  },
];

export const tasks = [
  {
    id: '1',
    title: 'Войдите 20 дней подряд',
    reward: 250,
    completed: false
  },
  {
    id: '2',
    title: 'Войдите 10 дней подряд',
    reward: 100,
    completed: false
  },
  {
    id: '3',
    title: 'Сделай первый депозит',
    reward: 300,
    completed: false
  },
  {
    id: '4',
    title: 'Добавить иконку приложения',
    reward: 200,
    completed: false
  }
];

