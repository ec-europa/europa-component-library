import { merge, renderTwigFileAsNode } from '@ecl/test-utils';
import dataDisplayListImage from '@ecl/specs-component-display-list/demo/data--image';
import dataDisplayListIcon from '@ecl/specs-component-display-list/demo/data--icon';

describe('Display list', () => {
  const template = '@ecl/display-list/display-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('With image', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDisplayListImage)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDisplayListImage, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDisplayListImage, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDisplayListIcon)).resolves.toMatchSnapshot();
    });
  });
});
