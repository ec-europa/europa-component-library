import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import demoContentImg from '@ecl/specs-component-media-container/demo/data--image';
import demoContentVideo from '@ecl/specs-component-media-container/demo/data--video';
import demoContentEmbed from '@ecl/specs-component-media-container/demo/data--embed-video';

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
  });

  describe('EC - Media container image', () => {
    test('Media container image renders correctly', () => {
      expect.assertions(1);
      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('EC - Media container video', () => {
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

  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...defaultDataStructure, _compliance_: true };
      dataCompliance.image = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});
