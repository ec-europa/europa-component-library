import { merge, renderTwigFileAsNode } from '@ecl/test-utils';
import dataDefault from '@ecl/specs-component-content-item/demo/data--default';
import dataImage from '@ecl/specs-component-content-item/demo/data--image';
import dataEvent from '@ecl/specs-component-content-item/demo/data--event';

describe('Content item', () => {
  const template = '@ecl/content-item/content-item.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Image', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataImage)).resolves.toMatchSnapshot();
    });
  });

  describe('Event', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataEvent)).resolves.toMatchSnapshot();
    });
  });
});
