import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataDefault from './demo/data--default';
import dataPrimaryHighlight from './demo/data--primary-highlight';
import dataStandalone from './demo/data--standalone';

expect.extend(toHaveNoViolations);

describe('Link', () => {
  const template = '@ecl/link/link.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataDefault, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Standalone', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataStandalone)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataStandalone, true)),
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
        sr_external: 'Links to an external url',
      },
      icon: {
        size: 'fluid',
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
        },
        {
          name: 'download',
          size: 'fluid',
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
        },
        {
          name: 'download',
          size: 'fluid',
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
        extra_classes: 'ecl-test-extra-class',
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, options, true)),
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

  describe('Primary highlight variant with icon', () => {
    const options = merge(dataPrimaryHighlight, {
      link: {
        label: 'Call to action link',
        icon_position: 'after',
      },
      icon: {
        name: 'corner-arrow',
        size: 'fluid',
        transform: 'rotate-90',
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('with indicator', () => {
    const options = merge(dataPrimaryHighlight, {
      link: {
        label: 'Call to action link',
        icon_position: 'after',
        hide_label: true,
        indicator: {
          value: 10,
        },
      },
      icon: {
        name: 'corner-arrow',
        size: 'fluid',
        transform: 'rotate-90',
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });
});
