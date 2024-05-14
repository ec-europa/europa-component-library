import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import data from '@ecl/specs-component-mega-menu/demo/data';

expect.extend(toHaveNoViolations);

describe('Mega Menu', () => {
  const template = '@ecl/mega-menu/mega-menu.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-button custom-button--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
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

    test('renders correctly with extra attributes for the fist level items', () => {
      expect.assertions(1);

      const withItemExtraAttributes = JSON.parse(JSON.stringify(data));
      withItemExtraAttributes.items[1].extra_attributes = [
        { name: 'test-item', value: 'testing value' },
      ];

      return expect(render(withItemExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes for the second level items', () => {
      expect.assertions(1);

      const withSubItemExtraAttributes = JSON.parse(JSON.stringify(data));
      withSubItemExtraAttributes.items[1].children[0].extra_attributes = [
        { name: 'test-subitem', value: 'testing value' },
      ];

      return expect(
        render(withSubItemExtraAttributes),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes for the featured columns items', () => {
      expect.assertions(1);

      const withFeaturedExtraAttributes = JSON.parse(JSON.stringify(data));
      withFeaturedExtraAttributes.items[1].children[0].featured.items[1].extra_attributes =
        [{ name: 'test-featured', value: 'testing value' }];

      return expect(
        render(withFeaturedExtraAttributes),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes for the see all links', () => {
      expect.assertions(1);

      const withSeeAllExtraAttributes = JSON.parse(JSON.stringify(data));
      withSeeAllExtraAttributes.items[1].children[0].see_all_attributes = [
        { name: 'test-see-all', value: 'testing value' },
      ];

      return expect(
        render(withSeeAllExtraAttributes),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with external items in the first level', () => {
      expect.assertions(1);
      // We test here the external icon on parent links (1) and items with a container (5)
      // expecting it not to appear and on the last standalone item (6) where we expect to see it.
      // Finally we test a sublink with children where the external icon should not be shown
      const withExternal = JSON.parse(JSON.stringify(data));
      withExternal.items[1].external = true;
      withExternal.items[1].sr_external = 'Link to an external domain';
      withExternal.items[5].external = true;
      withExternal.items[5].sr_external = 'Link to an external domain';
      withExternal.items[6].external = true;
      withExternal.items[6].sr_external = 'Link to an external domain';
      withExternal.items[1].children[2].external = true;
      withExternal.items[1].children[2].sr_external =
        'Link to an external domain';

      return expect(render(withExternal)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data)),
      ).toHaveNoViolations();
    });
  });
});
