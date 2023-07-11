import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataDefault from '@ecl/specs-component-link/demo/data--default';
import dataCta from '@ecl/specs-component-link/demo/data--cta';
import dataStandalone from '@ecl/specs-component-link/demo/data--standalone';

expect.extend(toHaveNoViolations);

describe('Link', () => {
  const template = '@ecl/link/link.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, dataDefault, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Standalone', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataStandalone)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, dataStandalone, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Standalone with missing icon name', () => {
    const options = merge(dataStandalone, {
      link: {
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: {
        size: 'fluid',
        path: defaultIconPath,
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('External', () => {
    const options = merge(dataStandalone, {
      link: {
        external: true,
        icon_path: defaultIconPath,
        icon_position: 'before',
      },
      icon: {
        size: 'fluid',
        path: defaultIconPath,
        name: 'test',
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
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
        },
        {
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
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
        },
        {
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
    const options = merge(dataStandalone, {
      link: {
        label: 'Standalone link with icon',
        icon_position: 'before',
      },
      icon: {
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

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, options, true)),
      ).toHaveNoViolations();
    });
  });

  describe('With icon after', () => {
    const options = merge(dataStandalone, {
      link: {
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: {
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
});
