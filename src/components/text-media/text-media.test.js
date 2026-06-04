import { describe, expect, test } from 'vitest';
import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoContentImage from './demo/data--image';
import demoContentVideo from './demo/data--video';

expect.extend(toHaveNoViolations);

describe('Text and media', () => {
  const template = '@ecl/text-media/text-media.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Image', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoContentImage)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoContentImage, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoContentImage, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoContentImage, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Video', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoContentVideo)).resolves.toMatchSnapshot();
    });
  });
});
