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

describe('EdsButton', () => {
  const template = '@ecl/eds-button/eds-button.html.twig';
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

    test('renders correctly disabled', () => {
      expect.assertions(1);

      const disabled = merge(dataButtonPrimary, { disabled: true });

      return expect(render(disabled)).resolves.toMatchSnapshot();
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
});
