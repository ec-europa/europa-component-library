import { merge, renderTwigFileAsNode } from '@ecl/test-utils';
import dataImage from '@ecl/specs-component-navigation-list/demo/data--image';
import dataEvent from '@ecl/specs-component-navigation-list/demo/data--event';

describe('Navigation list', () => {
  const template = '@ecl/navigation-list/navigation-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Image', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataImage)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataImage, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataImage, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Event', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataEvent)).resolves.toMatchSnapshot();
    });
  });
});
