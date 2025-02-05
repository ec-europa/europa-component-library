const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { unified } = require("unified");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const rehypeStringify = require("rehype-stringify");

const contentDir = path.resolve("content");

function getAllSlugs(dir = contentDir, basePath = "") {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      return fs.existsSync(path.join(fullPath, "index.mdx")) ||
        fs.existsSync(path.join(fullPath, "index.md"))
        ? relativePath
        : getAllSlugs(fullPath, relativePath);
    }
    return [];
  });
}

async function getPostBySlug(slug) {
  const { serialize } = await import("next-mdx-remote/serialize");
  const mdxPath = path.join(contentDir, slug, "index.mdx");
  const mdPath = path.join(contentDir, slug, "index.md");

  const isMDX = fs.existsSync(mdxPath);
  const filePath = isMDX ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!filePath) throw new Error(`File not found: ${slug}`);

  const fileContent = fs.readFileSync(filePath, "utf8").trim();
  if (!fileContent) throw new Error(`File is empty: ${slug}`);

  const { data, content } = matter(fileContent);
  if (!content.trim()) throw new Error(`Content is empty: ${slug}`);

  return {
    slug,
    metadata: data,
    content: content,
    isMDX,
  };
}

module.exports = { getAllSlugs, getPostBySlug };
