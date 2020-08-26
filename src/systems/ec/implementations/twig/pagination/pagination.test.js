import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import data from './demo/data';

describe('EC - Pagination', () => {
  const template = '@ecl-twig/ec-component-pagination/ecl-pagination.html.twig';
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

    test('With missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...data, _compliance_: true };
      dataCompliance.label = '';
      dataCompliance.items[0].type = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});
