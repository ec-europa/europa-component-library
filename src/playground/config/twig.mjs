import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { normalizePath } from 'vite';
import precompileTwig from 'vite-plugin-twing-drupal';

const require = createRequire(import.meta.url);
const loaderPath = normalizePath(
  path.join(
    path.dirname(require.resolve('vite-plugin-twing-drupal')),
    'loader/createSDCLoader.js',
  ),
);
const virtualEnvironment = 'virtual:twing-env';

// Adapter for the generated module contract of vite-plugin-twing-drupal 1.1.4.
// ECL uses plain Twig data: DrupalAttribute and PrintableArrayWrapper would
// change attributes, array indexing, length checks, and repeated renders.
export default function eclTwig(namespaces) {
  const createPlugin = () => precompileTwig({ namespaces, include: /\.twig$/ });
  let upstream = createPlugin();

  function reload(server) {
    upstream = createPlugin();
    for (const module of server.moduleGraph.idToModuleMap.values()) {
      if (module.id === virtualEnvironment || module.file?.endsWith('.twig')) {
        server.moduleGraph.invalidateModule(module);
      }
    }
    server.ws.send({ type: 'full-reload' });
  }

  return {
    ...upstream,
    name: 'ecl-twing',
    resolveId(id, importer) {
      if (id === virtualEnvironment) return id;
      if (!id.endsWith('.twig')) return null;
      if (id.startsWith('@')) {
        const slash = id.indexOf('/');
        const directories = namespaces[id.slice(1, slash)] || [];
        for (const directory of directories) {
          const candidate = path.resolve(directory, id.slice(slash + 1));
          if (existsSync(candidate)) return normalizePath(candidate);
        }
      }
      if (path.isAbsolute(id)) return normalizePath(id);
      if (id.startsWith('.') && importer) {
        return normalizePath(path.resolve(path.dirname(importer), id));
      }
      return null;
    },
    load(id) {
      if (id !== virtualEnvironment && !id.endsWith('.twig')) return null;
      if (id === virtualEnvironment) {
        const generated = upstream.load.call(this, id);
        // The plugin emits a cwd-relative loader URL that breaks when its package
        // lives outside the Vite root, as it does in this pnpm workspace.
        // Twing 7 has no implicit autoescape unless autoEscapingStrategy is set,
        // matching the previous Twing 5 environment's autoescape: false.
        const environment = generated
          .replace(/import DrupalAttribute from [^;]+;/, '')
          .replace(/import \{ addDrupalExtensions \} from [^;]+;/, '')
          .replace('addDrupalExtensions(env);', '')
          .replace(
            /import createSDCLoader from '[^']+';/,
            `import createSDCLoader from ${JSON.stringify(`/@fs/${loaderPath}`)};`,
          );
        const end = environment.indexOf('class PrintableArrayWrapper');
        if (end === -1) {
          this.error('Unexpected Twing plugin environment module.');
        }
        return `${environment.slice(0, end)}\nexport { env };`;
      }
      // All namespaced keys exist before the shared environment is sent to the
      // browser. Upstream's template load instead adds an absolute-path key on
      // demand, which may happen after that environment has already been served.
      let templateKey;
      for (const [namespace, directories] of Object.entries(namespaces)) {
        for (const directory of directories) {
          const relative = normalizePath(path.relative(directory, id));
          if (
            relative &&
            relative !== '..' &&
            !relative.startsWith('../') &&
            !path.isAbsolute(relative)
          ) {
            templateKey = `@${namespace}/${relative}`;
            break;
          }
        }
        if (templateKey) break;
      }
      if (!templateKey) {
        this.error(`Twig template is outside the configured namespaces: ${id}`);
      }
      this.addWatchFile(id);
      return `
        import { env } from '${virtualEnvironment}';
        export function render(context = {}) {
          return env.render(${JSON.stringify(templateKey)}, context);
        }
        export default render;
      `;
    },
    configureServer(server) {
      server.watcher.add(Object.values(namespaces).flat());
      // Includes are loaded into the shared environment rather than imported as
      // JS modules. Recreate that cache on additions/deletions as well as edits.
      const onChange = (file) => {
        if (file.endsWith('.twig')) reload(server);
      };
      server.watcher.on('add', onChange);
      server.watcher.on('unlink', onChange);
      server.httpServer?.once('close', () => {
        server.watcher.off('add', onChange);
        server.watcher.off('unlink', onChange);
      });
    },
    handleHotUpdate({ file, server }) {
      if (!file.endsWith('.twig')) return;
      reload(server);
      return [];
    },
  };
}
