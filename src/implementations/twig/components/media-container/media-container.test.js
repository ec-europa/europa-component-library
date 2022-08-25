import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoContentImg from '@ecl/specs-component-media-container/demo/data--image';
import demoContentVideo from '@ecl/specs-component-media-container/demo/data--video';
import demoContentEmbed from '@ecl/specs-component-media-container/demo/data--embed-video';

expect.extend(toHaveNoViolations);

describe('Media Container', () => {
  const template = '@ecl/media-container/media-container.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);
  const defaultDataStructure = demoContentImg;

  describe('Media Container generic tests', () => {
    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(defaultDataStructure, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('Media container renders correctly with extra attributes', () => {
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
        await axe(renderTwigFileAsHtml(template, defaultDataStructure, true))
      ).toHaveNoViolations();
    });
  });

  describe('Media container image', () => {
    test('Media container image renders correctly', () => {
      expect.assertions(1);
      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('Media container video', () => {
    test('renders correctly', () => {
      const options = merge(defaultDataStructure, {
        tracks: demoContentVideo.tracks,
        sources: demoContentVideo.sources,
      });

      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('with embedded media renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoContentEmbed)).resolves.toMatchSnapshot();
    });
  });
});
