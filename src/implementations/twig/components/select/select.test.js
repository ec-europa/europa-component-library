import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import dataSingle from '@ecl/specs-component-select/demo/data-single';
import dataMultiple from '@ecl/specs-component-select/demo/data-multiple';

describe('Select', () => {
  const template = '@ecl/select/select.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(
          merge(dataSingle, {
            required: false,
          })
        )
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSingle, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraAttributes = merge(dataSingle, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(
        render(optionsWithExtraAttributes)
      ).resolves.toMatchSnapshot();
    });
  });

  describe('Required', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSingle)).resolves.toMatchSnapshot();
    });
  });

  describe('Disabled', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(
          merge(dataSingle, {
            disabled: true,
            required: false,
          })
        )
      ).resolves.toMatchSnapshot();
    });
  });

  describe('With error', () => {
    const options = merge(dataSingle, {
      invalid: true,
      required: false,
    });

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('Multiple', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataMultiple)).resolves.toMatchSnapshot();
    });
  });
});
