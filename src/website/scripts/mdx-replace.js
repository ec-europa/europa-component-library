export default function mdxReplace(env = {}) {
  return {
    name: 'mdx-replace',
    enforce: 'pre', // Run before MDX parsing
    transform(code, id) {
      if (id.includes('getting-started')) {
        let transformed = code;
        Object.keys(env).forEach((key) => {
          const regex = new RegExp(`\\{process\\.env\\.${key}\\}`, 'g');
          transformed = transformed.replace(regex, env[key] || 'n/a');
        });

        return {
          code: transformed,
          map: null,
        };
      }
      return null;
    },
  };
}
