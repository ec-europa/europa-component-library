import { merge, renderTwigFileAsNode } from '@ecl/test-utils';
import specDefault from '@ecl/specs-component-text-area/demo/data';

const specInvalid = { ...specDefault, invalid: true };
const specDisabled = { ...specDefault, disabled: true };

const testTextArea = (dataDefault, dataInvalid, dataDisabled) => {
  const template = '@ecl/text-area/text-area.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Optional', () => {
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

  describe('Required', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const optionsWhenRequired = merge(dataDefault, {
        required: true,
      });

      return expect(render(optionsWhenRequired)).resolves.toMatchSnapshot();
    });
  });

  describe('Disabled', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });
  });

  describe('Invalid', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });
  });
};

describe('Text area', () => {
  testTextArea(specDefault, specInvalid, specDisabled);
});
