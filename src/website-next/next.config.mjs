import path from 'path';
import { fileURLToPath } from 'url';
import nextMDX from '@next/mdx';
import frontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import unwrapImages from 'remark-unwrap-images';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      frontmatter,
      remarkGfm,
      unwrapImages
    ],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    disableStaticImages: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ecl/website-components': path.resolve(
        __dirname,
        'src/website-components'
      ),
      '@ecl/website-utils': path.resolve(__dirname, 'src/utils'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]'
      }
    });

    return config;
  },
};

export default withMDX(nextConfig);
