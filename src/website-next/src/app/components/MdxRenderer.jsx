'use client';

import { MDXRemote } from 'next-mdx-remote';
import { mdxComponents } from '../mdx-components';

export default function MdxRenderer({ source }) {
  return <MDXRemote {...source} components={mdxComponents} />;
}
