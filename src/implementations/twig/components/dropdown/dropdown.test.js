import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import demoData from '@ecl/specs-component-dropdown/demo/data';

describe('Dropdown', () => {
  const template = '@ecl/dropdown/dropdown.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Collapsed', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoData)).resolves.toMatchSnapshot();
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
  });

  describe('Expanded', () => {
    const expanded = { ...demoData, expanded: true };

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(expanded)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(expanded, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(expanded, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
