// File: src/app/[...slug]/page.js

import { getPostBySlug } from '../lib/md';
import MdxRenderer from '../components/MdxRenderer';

export default async function Page({ params }) {
  const parameters = await params;
  const slug = parameters.slug?.join('/') ?? 'index';
  const { mdxSource, metadata } = await getPostBySlug(slug);

  return (
    <article>
      <h1>{metadata.title}</h1>
      <MdxRenderer source={mdxSource} />
    </article>
  );
}
