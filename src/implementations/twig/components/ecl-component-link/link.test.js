import { merge, renderTwigFileAsNode } from '@ecl/test-utils';
import dataDefault from '@ecl/ec-specs-link/demo/data--default';
import dataCta from '@ecl/ec-specs-link/demo/data--cta';
import dataStandalone from '@ecl/ec-specs-link/demo/data--standalone';

describe('EC - Link', () => {
  const template = '@ecl/ec-twig-component-link/ecl-link.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });
  });

  describe('Standalone', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataStandalone)).resolves.toMatchSnapshot();
    });
  });

  describe('Standalone with missing icon name', () => {
    const options = merge(dataStandalone, {
      link: {
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: {
        type: 'ui',
        size: 'fluid',
        path: defaultIconPath,
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('With two icons after', () => {
    const options = merge(dataStandalone, {
      link: {
        type: 'standalone',
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: [
        {
          type: 'ui',
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
        },
        {
          type: 'ui',
          name: 'download',
          size: 'fluid',
          path: defaultIconPath,
        },
      ],
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataStandalone, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('With two icons before', () => {
    const options = merge(dataStandalone, {
      link: {
        type: 'standalone',
        label: 'Standalone link with icon',
        icon_position: 'before',
      },
      icon: [
        {
          type: 'ui',
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
        },
        {
          type: 'ui',
          name: 'download',
          size: 'fluid',
          path: defaultIconPath,
        },
      ],
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon before', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const options = merge(dataStandalone, {
        link: {
          label: 'Standalone link with icon',
          icon_position: 'before',
        },
        icon: {
          type: 'ui',
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
          extra_classes: 'ecl-test-extra-class',
        },
      });

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon after', () => {
    const options = merge(dataStandalone, {
      link: {
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: {
        type: 'ui',
        name: 'external',
        size: 'fluid',
        path: defaultIconPath,
        extra_classes: 'ecl-test-extra-class',
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Cta variant with icon', () => {
    const options = merge(dataCta, {
      link: {
        label: 'Call to action link',
        icon_position: 'after',
      },
      icon: {
        type: 'ui',
        name: 'corner-arrow',
        size: 'fluid',
        path: defaultIconPath,
        transform: 'rotate-90',
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);

      const options = {
        link: {
          label: '',
          path: '',
          type: 'standalone',
          icon_position: 'after',
        },
        icon: {
          name: 'check-filled',
        },
        _compliance_: true,
      };

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });
});
