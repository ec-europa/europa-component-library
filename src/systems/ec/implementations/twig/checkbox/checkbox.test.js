import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataDefault from './demo/data--default';
import dataInvalid from './demo/data--invalid';

describe('EC - checkbox', () => {
  const template =
    '@ecl-twig/ec-component-checkbox/ecl-checkbox-group.html.twig';
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

    test('renders correctly when required', () => {
      expect.assertions(1);

      dataDefault.items.forEach((item) => {
        item.required = true; // eslint-disable-line no-param-reassign
      });

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });
  });

  describe('Invalid', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });
  });

  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);
      const dataCompliance = { ...dataDefault, _compliance_: true };
      dataCompliance.items[0].label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});
