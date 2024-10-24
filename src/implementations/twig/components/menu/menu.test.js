import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import dataShort from '@ecl/specs-component-menu/demo/data--ec';
import dataLong from '@ecl/specs-component-menu/demo/data--ec-long';

expect.extend(toHaveNoViolations);

describe('Menu', () => {
  const template = '@ecl/menu/menu.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataShort)).resolves.toMatchSnapshot();
    });

    test('renders correctly with a external first level menu item', () => {
      expect.assertions(1);
      const dataExternal = JSON.parse(JSON.stringify(dataShort));
      dataExternal.items[2].external = true;
      dataExternal.items[2].sr_external = 'Link to an external domain';

      return expect(render(dataExternal)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataShort, {
        extra_classes: 'custom-button custom-button--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataShort, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes for the items', () => {
      expect.assertions(1);

      const withItemExtraAttributes = JSON.parse(JSON.stringify(dataShort));
      withItemExtraAttributes.items[1].extra_attributes = [
        { name: 'test-item', value: 'testing value' },
      ];

      return expect(render(withItemExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes for the sub-items', () => {
      expect.assertions(1);

      const withSubItemExtraAttributes = JSON.parse(JSON.stringify(dataShort));
      withSubItemExtraAttributes.items[1].children[0].extra_attributes = [
        { name: 'test-subitem', value: 'testing value' },
      ];

      return expect(
        render(withSubItemExtraAttributes),
      ).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataShort)),
      ).toHaveNoViolations();
    });
  });

  describe('Long', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataLong)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataLong)),
      ).toHaveNoViolations();
    });
  });
});
