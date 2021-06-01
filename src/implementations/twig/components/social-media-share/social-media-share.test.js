/**
 * @jest-environment jsdom
 */

import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import demoData from '@ecl/specs-component-social-media-share/demo/data';

describe('Social Media Share', () => {
  const template = '@ecl/social-media-share/social-media-share.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);
  describe('Default', () => {
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
  });
  describe('Default view', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoData)).resolves.toMatchSnapshot();
    });
  });
});
