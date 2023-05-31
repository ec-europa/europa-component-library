import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import dataPrimary from '@ecl/specs-component-button/demo/data--primary';
import dataSecondary from '@ecl/specs-component-button/demo/data--secondary';
import dataCall from '@ecl/specs-component-button/demo/data--call';
import dataGhost from '@ecl/specs-component-button/demo/data--ghost';

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
        await axe(renderTwigFileAsHtml(template, dataPrimary))
      ).toHaveNoViolations();
    });
  });

  describe('Secondary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSecondary)).resolves.toMatchSnapshot();
    });
  });

  describe('CTA', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataCall)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, dataCall))
      ).toHaveNoViolations();
    });
  });

  describe('Text', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataGhost)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, dataGhost))
      ).toHaveNoViolations();
    });
  });

  describe('CTA button - icon before', () => {
    const buttonData = {
      label: 'CTA Button with icon',
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
        await axe(renderTwigFileAsHtml(template, dataCall))
      ).toHaveNoViolations();
    });
  });

  describe('CTA button - icon after', () => {
    const buttonData = {
      label: 'CTA Button with icon',
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
