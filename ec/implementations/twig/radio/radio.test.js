import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataDefault from './demo/data--default';
import dataInvalid from './demo/data--invalid';
import dataBinary from './demo/data--binary';
import dataBinaryInvalid from './demo/data--binary-invalid';

describe('EC - Radio', () => {
  const template = '@ecl-twig/ec-component-radio/ecl-radio-group.html.twig';
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

    test('with validation enabled and missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataDefault, _compliance_: true };
      dataCompliance.items[0].label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Invalid', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });
  });

  describe('Binary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataBinary)).resolves.toMatchSnapshot();
    });
  });

  describe('Binary invalid', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataBinaryInvalid)).resolves.toMatchSnapshot();
    });
  });
});
