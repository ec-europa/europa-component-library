import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import data from './demo/data';

describe('EC - Search Form', () => {
  const template =
    '@ecl-twig/ec-component-search-form/ecl-search-form.html.twig';
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

    test('renders correctly with extra form elements', () => {
      expect.assertions(1);

      const withExtraFormElements = merge(data, {
        extra_form_elements:
          '<input type="hidden" id="custId" name="custId" value="1">',
      });

      return expect(render(withExtraFormElements)).resolves.toMatchSnapshot();
    });
  });
  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = {
        ...data,
        button: {
          label: '',
        },
        icon: {
          path: '',
        },
        _compliance_: true,
      };

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});
