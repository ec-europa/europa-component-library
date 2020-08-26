import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import data3Col from './demo/data--3-col';
import data4Col from './demo/data--4-col';

describe('EC - Fact and figures', () => {
  const template =
    '@ecl-twig/ec-component-fact-figures/ecl-fact-figures.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('3 cols', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data3Col)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data3Col, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data3Col, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('4 cols', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data4Col)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data4Col, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data4Col, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);
      const dataCompliance = { ...data3Col, _compliance_: true };
      dataCompliance.items[0].value = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});
