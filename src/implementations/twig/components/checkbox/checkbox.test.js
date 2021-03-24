import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

// Import data for tests
import dataEc from '@ecl/specs-component-checkbox/demo/data--ec';
import dataEu from '@ecl/specs-component-checkbox/demo/data--eu';

const dataSingleEc = { ...dataEc, items: [dataEc.items[0]], invalid: true };
const dataSingleEu = { ...dataEu, items: [dataEu.items[0]], invalid: true };
const dataInvalidEc = { ...dataEc, invalid: true };
const dataInvalidEu = { ...dataEu, invalid: true };

describe('Checkbox', () => {
  const template = '@ecl/checkbox/checkbox-group.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('EC', () => {
    test('default renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataEc)).resolves.toMatchSnapshot();
    });

    test('default renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataEc, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('default renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataEc, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);

      dataEc.items.forEach((item) => {
        item.required = true; // eslint-disable-line no-param-reassign
      });

      return expect(render(dataEc)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);

      return expect(render(dataInvalidEc)).resolves.toMatchSnapshot();
    });

    test('single checkbox renders correctly when invalid', () => {
      expect.assertions(1);

      return expect(render(dataSingleEc)).resolves.toMatchSnapshot();
    });
  });

  describe('EU', () => {
    test('default renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataEu)).resolves.toMatchSnapshot();
    });
    test('invalid renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataInvalidEu)).resolves.toMatchSnapshot();
    });

    test('single checkbox renders correctly when invalid', () => {
      expect.assertions(1);

      return expect(render(dataSingleEu)).resolves.toMatchSnapshot();
    });
  });
});
