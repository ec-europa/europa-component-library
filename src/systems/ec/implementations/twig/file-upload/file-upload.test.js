import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataDefault from './demo/data';

describe('EC - File Upload ', () => {
  const template =
    '@ecl-twig/ec-component-file-upload/ecl-file-upload.html.twig';
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
      dataCompliance.button_choose_label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataDefault, {
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataDefault, { disabled: true });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataDefault, {
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });
  });
});
