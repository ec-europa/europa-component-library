import getSystem from './utils/getSystem';

describe('ECL Builder', () => {
  describe('System resolution module', () => {
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
});
