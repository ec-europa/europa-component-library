import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import data from '@ecl/specs-component-checkbox/demo/data';

const dataSingle = { ...data, items: [data.items[0]], invalid: true };
const dataInvalid = { ...data, invalid: true };

expect.extend(toHaveNoViolations);

describe('Checkbox', () => {
  const template = '@ecl/checkbox/checkbox-group.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
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

    test('renders correctly when required', () => {
      expect.assertions(1);

      data.items.forEach((item) => {
        item.required = true; // eslint-disable-line no-param-reassign
      });

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);

      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test('single checkbox renders correctly when invalid', () => {
      expect.assertions(1);

      return expect(render(dataSingle)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, data, true))
      ).toHaveNoViolations();
    });
  });
});
