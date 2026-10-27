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
const eclEnvironment = 'virtual:ecl-twing-env';

// Keep workspace paths and template cache keys compatible with Vite/pnpm while
// leaving template rendering and Drupal attributes to the upstream plugin.
export default function eclTwig(namespaces) {
  const createPlugin = () => precompileTwig({ namespaces, include: /\.twig$/ });
  let upstream = createPlugin();

  function reload(server) {
    upstream = createPlugin();
    for (const module of server.moduleGraph.idToModuleMap.values()) {
      if (
        module.id === virtualEnvironment ||
        module.id === eclEnvironment ||
        module.file?.endsWith('.twig')
      ) {
        server.moduleGraph.invalidateModule(module);
      }
    }
    server.ws.send({ type: 'full-reload' });
  }

  return {
    ...upstream,
    name: 'ecl-twing',
    resolveId(id, importer) {
      if (id === eclEnvironment) return id;
      if (id === virtualEnvironment) {
        return importer?.endsWith('.twig') ? eclEnvironment : id;
      }
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
      if (id === eclEnvironment) {
        // Preserve all upstream exports except array conversion. Its wrapper
        // changes Twig loop.last and mutates reusable ECL demo data, as shown by
        // running the existing snapshots through the plugin's render functions.
        // Returning the native array also keeps indexing and JSON cloning intact.
        return `
          export * from '${virtualEnvironment}';
          export function PrintableArrayWrapper(items) { return items; }
        `;
      }
      if (id !== virtualEnvironment && !id.endsWith('.twig')) return null;
      if (id === virtualEnvironment) {
        const generated = upstream.load.call(this, id);
        // The plugin emits a cwd-relative loader URL that breaks when its package
        // lives outside the Vite root, as it does in this pnpm workspace.
        return generated.replace(
          /import createSDCLoader from '[^']+';/,
          `import createSDCLoader from ${JSON.stringify(`/@fs/${loaderPath}`)};`,
        );
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
      return upstream.load.call(this, templateKey);
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
