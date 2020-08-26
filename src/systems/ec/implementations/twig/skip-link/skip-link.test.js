import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import specs from '@ecl/ec-specs-skip-link/demo/data';

describe('EC - Skip Link', () => {
  const template = '@ecl-twig/ec-component-skip-link/ecl-skip-link.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(specs)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(specs, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(specs, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('With missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...specs, _compliance_: true };
      dataCompliance.href = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});
