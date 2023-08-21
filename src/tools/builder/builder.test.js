import sass from 'sass';
import postcss from 'postcss';

import getSystem from './utils/getSystem';
import { getPlugins } from './scripts/styles';

describe('ECL Builder', () => {
  describe('System resolution utility', () => {
    let windowSpy;
    beforeEach(() => {
      windowSpy = jest.spyOn(window, 'window', 'get');
    });
    afterEach(() => {
      delete process.env.ECL_SYSTEM;
      delete process.env.STORYBOOK_SYSTEM;
      windowSpy.mockRestore();
    });

    it('should return null on no context match', () => {
      expect(() => {
        getSystem().not.toThrow();
      });
      expect(getSystem()).toBe(null);
    });

    it('should respect ECL_SYSTEM environment variable', () => {
      process.env.ECL_SYSTEM = 'EC';
      expect(getSystem()).toBe('ec');

      process.env.ECL_SYSTEM = 'EU';
      expect(getSystem()).toBe('eu');
    });

    it('should respect STORYBOOK_SYSTEM environment variable', () => {
      process.env.STORYBOOK_SYSTEM = 'EC';
      expect(getSystem()).toBe('ec');

      process.env.STORYBOOK_SYSTEM = 'EU';
      expect(getSystem()).toBe('eu');
    });

    it('should have preference for STORYBOOK_SYSTEM over ECL_SYSTEM', () => {
      process.env.ECL_SYSTEM = 'EC';
      process.env.STORYBOOK_SYSTEM = 'EU';
      expect(getSystem()).toBe('eu');

      process.env.ECL_SYSTEM = 'EU';
      process.env.STORYBOOK_SYSTEM = 'EC';
      expect(getSystem()).toBe('ec');
    });

    it('should handle only ec and eu strings', () => {
      process.env.ECL_SYSTEM = 'ecl';
      expect(getSystem()).toBe(null);

      process.env.STORYBOOK_SYSTEM = 'ecl';
      expect(getSystem()).toBe(null);
    });

    it('should respect window.location.pathname', () => {
      windowSpy.mockImplementation(() => ({
        location: {
          pathname: '/playground/ec/',
        },
      }));

      expect(getSystem()).toBe('ec');

      windowSpy.mockImplementation(() => ({
        location: {
          pathname: '/playground/eu/',
        },
      }));

      expect(getSystem()).toBe('eu');

      windowSpy.mockImplementation(() => ({
        location: {
          pathname: '/component-library/playground/ec/',
        },
      }));

      expect(getSystem()).toBe('ec');

      windowSpy.mockImplementation(() => ({
        location: {
          pathname: '/component-library/playground/eu/',
        },
      }));

      expect(getSystem()).toBe('eu');
    });

    it('should have preference for window.location.pathname over STORYBOOK_SYSTEM', () => {
      process.env.STORYBOOK_SYSTEM = 'EU';
      windowSpy.mockImplementation(() => ({
        location: {
          pathname: '/playground/ec/',
        },
      }));

      expect(getSystem()).toBe('ec');

      process.env.STORYBOOK_SYSTEM = 'EC';
      windowSpy.mockImplementation(() => ({
        location: {
          pathname: '/playground/eu/',
        },
      }));

      expect(getSystem()).toBe('eu');
    });
  });

  describe('Styles script', () => {
    // Keeps track of function names for assertions below.
    const replacer = (_, val) => {
      if (val instanceof Function || typeof val === 'function') {
        return val.name === '' ? 'closure()' : `${val.name}fn()`;
      }
      return val;
    };

    afterEach(() => {
      delete process.env.NODE_ENV;
      delete process.env.ECL_SYSTEM;
    });

    it('should have its plugins system publicly accessible', () => {
      expect(typeof getPlugins).toBe('function');
    });

    it('should use the specified list of plugins in development', () => {
      const plugins = getPlugins();
      expect(plugins.length).toBe(2);
      expect(JSON.stringify(plugins, replacer)).toEqual(
        '[{"info":"infofn()","options":{"grid":"no-autoplace"},"postcssPlugin":"autoprefixer","prepare":"preparefn()"},{"postcssPlugin":"postcss-input-range","Rule":"Rulefn()"}]',
      );
    });

    it('should use the specified list of plugins in production', () => {
      process.env.NODE_ENV = 'production';
      const plugins = getPlugins({ banner: 'build label' });
      expect(plugins.length).toBe(4);

      expect(plugins[1].postcssPlugin).toBe('postcss-input-range');
      expect(plugins[2].postcssPlugin).toBe('postcss-banner');

      expect(JSON.stringify(plugins, replacer))
        .toString()
        .includes(
          '[{"postcssPlugin":"autoprefixer","prepare":"preparefn()","info":"infofn()","options":{"grid":"no-autoplace"}},{"postcssPlugin":"postcss-input-range","Rule":"Rulefn()"},"andBannerfn()","closure()"]',
        );
    });

    it('should minify css files following the related option', () => {
      const plugins = getPlugins({ minify: true });

      expect(plugins.length).toBe(3);
      expect(plugins[1].postcssPlugin).toBe('postcss-input-range');
      expect(Object.values(plugins[2])[1].pop().postcssPlugin).toBe(
        'cssnano-util-raw-cache',
      );
    });

    it('should be able to expose getSystem utility in scss source code', async () => {
      async function runTest() {
        let system = getSystem();
        function customSassFunctionAsync() {
          return Promise.resolve(new sass.types.String(system || ''));
        }

        const string = `
          $system: getsystem();
          .system-specific { content: $system; };
        `;

        const options = {
          functions: {
            'getsystem()': customSassFunctionAsync,
          },
        };

        let sassResult = await sass.compileStringAsync(string, options);
        let postcssResult = await postcss(getPlugins()).process(sassResult.css);
        expect(postcssResult.css).toBe('');

        process.env.ECL_SYSTEM = 'ec';
        system = getSystem();
        sassResult = await sass.compileStringAsync(string, options);
        postcssResult = await postcss(getPlugins()).process(sassResult.css);
        expect(postcssResult.css).toEqual(
          `.system-specific {
        content: ec;
      }`,
        );

        process.env.ECL_SYSTEM = 'eu';
        system = getSystem();
        sassResult = await sass.compileStringAsync(string, options);
        postcssResult = await postcss(getPlugins()).process(sassResult.css);
        expect(postcssResult.css).toEqual(
          `.system-specific {
        content: eu;
      }`,
        );
      }

      runTest();
    });
  });
});
