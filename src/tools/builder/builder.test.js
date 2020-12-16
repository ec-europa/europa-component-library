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
      expect(plugins.length).toBe(1);
      expect(JSON.stringify(plugins, replacer)).toEqual(
        '[{"postcssPlugin":"autoprefixer","prepare":"preparefn()","info":"infofn()","options":{"grid":"no-autoplace"}}]'
      );
    });

    it('should use the specified list of plugins in production', () => {
      process.env.NODE_ENV = 'production';
      const plugins = getPlugins({ banner: 'build label' });
      expect(plugins.length).toBe(3);
      expect(plugins[1].toString().includes('andBanner')).toBe(true);

      expect(JSON.stringify(plugins, replacer)).toEqual(
        '[{"postcssPlugin":"autoprefixer","prepare":"preparefn()","info":"infofn()","options":{"grid":"no-autoplace"}},"andBannerfn()","closure()"]'
      );
    });

    it('should be able to expose getSystem utility in scss source code', async () => {
      let system = getSystem();
      const options = {
        data: `
            $system: getsystem();
            .system-specific { content: $system; };
        `,
        functions: {
          'getsystem()': () => new sass.types.String(system || ''),
        },
      };

      let sassResult = sass.renderSync(options);
      let postcssResult = await postcss(getPlugins()).process(sassResult.css);
      expect(postcssResult.css).toBe('');

      process.env.ECL_SYSTEM = 'ec';
      system = getSystem();
      sassResult = sass.renderSync(options);
      postcssResult = await postcss(getPlugins()).process(sassResult.css);
      expect(postcssResult.css).toEqual(
        `.system-specific {
  content: ec;
}`
      );

      process.env.ECL_SYSTEM = 'eu';
      system = getSystem();
      sassResult = sass.renderSync(options);
      postcssResult = await postcss(getPlugins()).process(sassResult.css);
      expect(postcssResult.css).toEqual(
        `.system-specific {
  content: eu;
}`
      );
    });
  });
});
