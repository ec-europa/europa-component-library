import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe } from 'vitest-axe';

import data from '@ecl/specs-component-video/demo/data';

describe('Video', () => {
  const template = '@ecl/video/video.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with autoplay, loop and muted', () => {
      expect.assertions(1);

      const dataLoop = {
        ...data,
        loop: true,
        muted: true,
        autoplay: true,
      };

      return expect(render(dataLoop)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_classes: 'custom-class--video',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(
      `passes the accessibility tests`,
      async () => {
        expect(
          await axe(await renderTwigFileAsHtml(template, data, true)),
        ).toHaveNoViolations();
      },
      { timeout: 15000 },
    );
  });
});
