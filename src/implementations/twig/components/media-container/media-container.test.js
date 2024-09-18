import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoContentImg from '@ecl/specs-component-media-container/demo/data--image';
import demoContentVideo from '@ecl/specs-component-media-container/demo/data--video';
import demoBackwardVideo from '@ecl/specs-component-media-container/demo/old-data--video';
import demoContentEmbed from '@ecl/specs-component-media-container/demo/data--embed-video';
import demoContentInfographic from '@ecl/specs-component-media-container/demo/data--infographic';

expect.extend(toHaveNoViolations);

describe('Media Container', () => {
  const template = '@ecl/media-container/media-container.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);
  const defaultDataStructure = demoContentImg;

  describe('generic tests', () => {
    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(defaultDataStructure, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(defaultDataStructure, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(template, defaultDataStructure, true),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('image', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('video', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoContentVideo)).resolves.toMatchSnapshot();
    });

    test('as autoplay renders correctly', () => {
      const dataVideo = {
        ...demoContentVideo.video,
        autoplay: true,
      };

      expect.assertions(1);
      return expect(render(dataVideo)).resolves.toMatchSnapshot();
    });

    test('with old data renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoBackwardVideo)).resolves.toMatchSnapshot();
    });

    test('with embedded media renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoContentEmbed)).resolves.toMatchSnapshot();
    });
  });

  describe('infographic', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoContentInfographic)).resolves.toMatchSnapshot();
    });
  });
});
