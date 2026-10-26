import path from 'node:path';
import { normalizePath } from 'vite';

// Demo data is also consumed by Jest through CommonJS. Convert its top-level
// export only when Vite serves or bundles it, preserving any existing imports.
export default function demoData(sourceRoot) {
  return {
    name: 'ecl-demo-data',
    enforce: 'pre',
    transform(code, id) {
      const filename = id.split('?')[0];
      const relative = normalizePath(path.relative(sourceRoot, filename));
      if (
        !/^(components|compositions|page-example|layout|utilities)\/[^/]+\/demo\/.*\.js$/.test(
          relative,
        ) ||
        !/\bmodule\s*\.\s*exports\s*=/.test(code)
      ) {
        return null;
      }

      // Use the parsed assignment's boundaries so strings and comments that
      // contain "module.exports" are never rewritten.
      const assignments = this.parse(code).body.filter((node) => {
        const expression = node.expression;
        return (
          node.type === 'ExpressionStatement' &&
          expression.type === 'AssignmentExpression' &&
          expression.operator === '=' &&
          expression.left.type === 'MemberExpression' &&
          !expression.left.computed &&
          expression.left.object.type === 'Identifier' &&
          expression.left.object.name === 'module' &&
          expression.left.property.name === 'exports'
        );
      });

      if (!assignments.length) return null;
      if (assignments.length !== 1) {
        this.error(`Expected one module.exports assignment in ${filename}`);
      }

      const { expression } = assignments[0];
      return {
        code:
          code.slice(0, expression.start) +
          'export default ' +
          code.slice(expression.right.start),
        map: null,
      };
    },
  };
}
