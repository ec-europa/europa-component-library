// File: src/lib/markdown.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { serialize } from 'next-mdx-remote/serialize'; // If you still use next-mdx-remote

// Use process.cwd() so this works regardless of where the code is called.
const contentDir = path.join(process.cwd(), 'src', 'content');

/**
 * Recursively collect any subfolder that contains an index.md or index.mdx,
 * returning an array of "slugs" (relative folder paths).
 */
export function getAllSlugs(dir = contentDir, basePath = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    // If this is a directory, check if it has index.md or index.mdx.
    if (entry.isDirectory()) {
      const mdFile = path.join(fullPath, 'index.md');
      const mdxFile = path.join(fullPath, 'index.mdx');

      if (fs.existsSync(mdFile) || fs.existsSync(mdxFile)) {
        // If a folder has either 'index.md' or 'index.mdx', treat the folder itself as a "slug"
        return relativePath;
      } else {
        // Otherwise, recurse into it
        return getAllSlugs(fullPath, relativePath);
      }
    }
    return [];
  });
}

/**
 * Given a slug (which is essentially the folder name under src/content),
 * load either index.mdx or index.md, parse frontmatter, and return the data.
 */
export async function getPostBySlug(slug) {
  // Build absolute paths for mdx or md
  const mdxPath = path.join(contentDir, slug, 'index.mdx');
  const mdPath = path.join(contentDir, slug, 'index.md');

  // Check which one actually exists
  const isMDX = fs.existsSync(mdxPath);
  const filePath = isMDX ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!filePath) {
    throw new Error(`File not found for slug: ${slug}`);
  }
  console.log(mdxPath);

  // Read file content
  const fileContent = fs.readFileSync(filePath, 'utf8').trim();
  if (!fileContent) {
    throw new Error(`File is empty: ${slug}`);
  }

  // Extract front matter
  const { data, content } = matter(fileContent);

  const mdxSource = await serialize(content, { scope: data });

  return {
    slug,
    metadata: data,
    mdxSource,
  };
}
