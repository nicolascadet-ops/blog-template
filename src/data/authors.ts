import imogen from '../assets/authors/imogen.jpg';
import theo from '../assets/authors/theo.jpg';
import aiko from '../assets/authors/aiko.jpg';

// Fictional writers. Portraits are Unsplash sample photos (see README).
export const AUTHORS = {
  imogen: { name: 'Imogen Clarke', role: 'Editor', city: 'Edinburgh', photo: imogen, bio: 'Imogen founded Northbound after a decade at a London newspaper travel desk. She writes about islands, buses and bad weather.' },
  theo: { name: 'Theo Marchetti', role: 'Contributing writer', city: 'Montréal', photo: theo, bio: 'Theo writes about cities, food and the people who keep both going. He has eaten breakfast in more diners than he can count.' },
  aiko: { name: 'Aiko Brennan', role: 'Photography editor', city: 'Vancouver', photo: aiko, bio: 'Aiko photographs and writes about winter landscapes, from Hokkaido to the Norwegian Arctic.' },
} as const;

export type AuthorId = keyof typeof AUTHORS;
