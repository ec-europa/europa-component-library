// File: src/app/[...slug]/page.js

import { getAllSlugs, getPostBySlug } from '../lib/md';
import { serialize } from 'next-mdx-remote/serialize';
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
