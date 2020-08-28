import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import dataDefault from './demo/data--default';
import dataDisabled from './demo/data--disabled';
import dataError from './demo/data--with-error';

describe('EC - Text field', () => {
  const template = '@ecl-twig/ec-component-text-input/ecl-text-input.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra group class names', () => {
      expect.assertions(1);

      const optionsWithExtraGroupClasses = merge(dataDefault, {
        extra_group_classes: 'custom-group-class custom-group-class--test',
      });

      return expect(
        render(optionsWithExtraGroupClasses)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);

      const optionsWhenRequired = merge(dataDefault, {
        required: true,
      });

      return expect(render(optionsWhenRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra label class names', () => {
      expect.assertions(1);

      const optionsWithExtraLabelClasses = merge(dataDefault, {
        extra_label_classes: 'custom-label-class custom-label-class--test',
      });

      return expect(
        render(optionsWithExtraLabelClasses)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('Disabled', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra group class names', () => {
      expect.assertions(1);

      const optionsWithExtraGroupClasses = merge(dataDisabled, {
        extra_group_classes: 'custom-group-class custom-group-class--test',
      });

      return expect(
        render(optionsWithExtraGroupClasses)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataDisabled, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataDisabled, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('With error', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataError)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra group class names', () => {
      expect.assertions(1);

      const optionsWithExtraGroupClasses = merge(dataError, {
        extra_group_classes: 'custom-group-class custom-group-class--test',
      });

      return expect(
        render(optionsWithExtraGroupClasses)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataError, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataError, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);

      const options = {
        ...dataDefault,
        label: '',
        _compliance_: true,
      };

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });
});
