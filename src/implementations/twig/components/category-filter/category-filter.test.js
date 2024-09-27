import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe } from 'vitest-axe';

// Import data for tests
import demoData from '@ecl/specs-component-category-filter/demo/data';

describe('Category filter', () => {
  const template = '@ecl/category-filter/category-filter.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoData, {
        extra_classes: 'custom-button custom-button--test',
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

    test('renders correctly with extra attributes on an item', () => {
      expect.assertions(1);

      const withItemExtraAttrs = JSON.parse(JSON.stringify(demoData));
      withItemExtraAttrs.items[0].extra_attributes = [
        { name: 'data-test-item', value: 'data-test-value' },
        { name: 'data-test-1-item', value: 'data-test-value-1' },
      ];

      return expect(render(withItemExtraAttrs)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoData)),
      ).toHaveNoViolations();
    });
  });
});
