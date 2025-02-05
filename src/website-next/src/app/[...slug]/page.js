import { getAllSlugs, getPostBySlug } from "../../../lib/md";
import { MDXRemote } from "next-mdx-remote";
import React from "react";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug: slug.split("/") }));
}

export default async function PostPage(props) {
  const params = await props.params;
  if (!params || !params.slug) {
    return <h1>Page Not Found</h1>;
  }

  const slugPath = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  const { metadata, content, isMDX } = await getPostBySlug(slugPath);

  return (
    <article>
      <h1>{metadata.title}</h1>
      {isMDX ? <MDXRemote {...content} /> : <div dangerouslySetInnerHTML={{ __html: content }} />}
    </article>
  );
}
