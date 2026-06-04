import { describe, expect, test } from 'vitest';
import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import demoData from './demo/data';
import demoPoll from './demo/data-poll';

expect.extend(toHaveNoViolations);

describe('Quiz', () => {
  const template = '@ecl/quiz/quiz.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Reveal', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoData)).resolves.toMatchSnapshot();
    });

    test('renders correctly in full width', () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, full_width: true }),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly in with a background', () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, with_background: true }),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoData, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Poll', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoPoll)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoPoll, true)),
      ).toHaveNoViolations();
    });
  });
});
