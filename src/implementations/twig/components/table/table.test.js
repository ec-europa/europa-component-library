import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import dataDefault from '@ecl/specs-component-table/demo/data--default';
import dataMulti from '@ecl/specs-component-table/demo/data--multi';
import dataSortable from '@ecl/specs-component-table/demo/data--sort-table';

expect.extend(toHaveNoViolations);

describe('Table', () => {
  const template = '@ecl/table/table.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Zebra', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      const data = merge(dataDefault, {
        zebra: true,
      });

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-table--test',
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

    test('renders correctly with row extra attributes', () => {
      expect.assertions(1);

      const withRowExtraAttributes = dataDefault;
      withRowExtraAttributes.rows.forEach((row) => {
        row.extra_attributes = 'data-test data-test-another'; // eslint-disable-line no-param-reassign
      });

      return expect(render(withRowExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with row extra classes', () => {
      expect.assertions(1);

      const withRowExtraClasses = dataDefault;
      withRowExtraClasses.rows.forEach((row) => {
        row.extra_classes = 'row-extra-class'; // eslint-disable-line no-param-reassign
      });

      return expect(render(withRowExtraClasses)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, dataDefault, true))
      ).toHaveNoViolations();
    });
  });

  describe('Multi', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataMulti)).resolves.toMatchSnapshot();
    });
  });

  describe('Sort table', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSortable)).resolves.toMatchSnapshot();
    });
  });
});
