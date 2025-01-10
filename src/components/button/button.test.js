import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import dataPrimary from './demo/data--primary';
import dataSecondary from './demo/data--secondary';
import dataCall from './demo/data--call';
import dataGhost from './demo/data--ghost';
import dataGhostInverted from './demo/data--ghost-inverted';
import dataTertiary from './demo/data--tertiary';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  const template = '@ecl/button/button.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Primary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataPrimary)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataPrimary)),
      ).toHaveNoViolations();
    });
  });

  describe('Secondary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSecondary)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataSecondary)),
      ).toHaveNoViolations();
    });
  });

  describe('Tertiary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataTertiary)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataTertiary)),
      ).toHaveNoViolations();
    });
  });

  describe('CTA', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataCall)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCall, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Ghost', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataGhost)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataGhost)),
      ).toHaveNoViolations();
    });
  });

  describe('Ghost inverted', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataGhostInverted)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataGhostInverted)),
      ).toHaveNoViolations();
    });
  });

  describe('CTA button - icon only', () => {
    const buttonData = {
      label: 'CTA Button with icon only',
      variant: 'cta',
      icon: {
        path: 'static/icons.svg',
        name: 'corner-arrow',
        size: 'fluid',
      },
      hide_label: true,
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCall)),
      ).toHaveNoViolations();
    });
  });

  describe('CTA button - with indicator', () => {
    const buttonData = {
      label: 'CTA Button with indicator',
      variant: 'cta',
      icon: {
        path: 'static/icons.svg',
        name: 'corner-arrow',
        size: 'fluid',
      },
      hide_label: true,
      indicator: {
        value: 10,
      },
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCall)),
      ).toHaveNoViolations();
    });
  });

  describe('CTA button - icon before', () => {
    const buttonData = {
      label: 'CTA Button with icon before',
      variant: 'cta',
      icon_position: 'before',
      icon: {
        path: 'static/icons.svg',
        name: 'corner-arrow',
        size: 'fluid',
      },
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCall)),
      ).toHaveNoViolations();
    });
  });

  describe('CTA button - icon after', () => {
    const buttonData = {
      label: 'CTA Button with icon after',
      variant: 'cta',
      icon: {
        path: 'static/icons.svg',
        name: 'corner-arrow',
        size: 'fluid',
      },
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(buttonData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(buttonData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
