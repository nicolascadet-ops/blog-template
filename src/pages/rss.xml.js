import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../site';

export async function GET(context) {
  const posts = (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.dek,
      pubDate: p.data.date,
      categories: [p.data.category],
      link: `/posts/${p.id}/`,
    })),
  });
}
