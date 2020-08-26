import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import dataDefault from './demo/data--default';
import dataDisabled from './demo/data--is-disabled';
import dataError from './demo/data--has-error';

describe('EC - Text area', () => {
  const template = '@ecl-twig/ec-component-text-area/ecl-text-area.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with a default value', () => {
      expect.assertions(1);

      const optionsWithDefaultValue = merge(dataDefault, {
        default_value: 'Hello world!',
      });

      return expect(render(optionsWithDefaultValue)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);

      const optionsWhenRequired = merge(dataDefault, {
        required: true,
      });

      return expect(render(optionsWhenRequired)).resolves.toMatchSnapshot();
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

    test('renders correctly with extra label class names', () => {
      expect.assertions(1);

      const optionsWithExtraLabelClasses = merge(dataDefault, {
        extra_label_classes: 'custom-label-class custom-label-class--test',
      });

      return expect(
        render(optionsWithExtraLabelClasses)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
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

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataDefault, _compliance_: true };
      dataCompliance.label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
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

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataError, _compliance_: true };
      dataCompliance.invalid_text = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});
