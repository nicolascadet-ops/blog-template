// Edit these to make the template yours.
export const SITE = {
  name: 'Northbound',
  tagline: 'Slow travel to cold places',
  description: 'Northbound is an independent travel magazine about slow journeys to northern places: islands, mountains, small cities and long train rides.',
  email: 'letters@northbound.example',
};

export const readingTime = (text = '') => Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
export const formatDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
