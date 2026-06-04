import { describe, expect, test } from 'vitest';
import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import dataButton from './demo/data';

const dataButtonPrimary = { ...dataButton, variant: 'primary' };
const dataButtonSecondary = { ...dataButton, variant: 'secondary' };
const dataButtonTertiary = { ...dataButton, variant: 'tertiary' };

expect.extend(toHaveNoViolations);

describe('Button', () => {
  const template = '@ecl/button/button.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Primary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataButtonPrimary)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataButtonPrimary)),
      ).toHaveNoViolations();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataButtonPrimary, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataButtonPrimary, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Secondary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataButtonSecondary)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataButtonSecondary)),
      ).toHaveNoViolations();
    });
  });

  describe('Tertiary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataButtonTertiary)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataButtonTertiary)),
      ).toHaveNoViolations();
    });
  });

  describe('Primary button highlight - icon only', () => {
    const buttonData = {
      ...dataButtonPrimary,
      style: 'highlight',
      icon: {
        name: 'corner-arrow-up',
        size: 'fluid',
      },
      hide_label: true,
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, buttonData)),
      ).toHaveNoViolations();
    });
  });

  describe('Secondary button neutral - with indicator', () => {
    const buttonData = {
      ...dataButtonSecondary,
      style: 'neutral',
      icon: {
        name: 'corner-arrow-up',
        size: 'fluid',
      },
      hide_label: true,
      indicator: {
        value: 10,
        sr_label: 'new items',
      },
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, buttonData)),
      ).toHaveNoViolations();
    });
  });

  describe('Tertiary button neutral - icon before', () => {
    const buttonData = {
      ...dataButtonTertiary,
      style: 'neutral',
      icon_position: 'before',
      icon: {
        name: 'corner-arrow-up',
        size: 'fluid',
      },
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, buttonData)),
      ).toHaveNoViolations();
    });
  });

  describe('Primary button inverted - icon after', () => {
    const buttonData = {
      ...dataButtonPrimary,
      style: 'inverted',
      icon: {
        name: 'corner-arrow-up',
        size: 'fluid',
      },
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, buttonData)),
      ).toHaveNoViolations();
    });
  });
});
