import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests

import specDefault from '@ecl/specs-component-radio/demo/data--default';
import specBinary from '@ecl/specs-component-radio/demo/data--binary';

const dataDefault = specDefault.input;
const dataBinary = specBinary.input;

const dataInvalid = { ...dataDefault, invalid: true };
const dataOptional = { ...dataDefault, required: false };
const dataBinaryInvalid = { ...dataBinary, invalid: true };

expect.extend(toHaveNoViolations);

describe('Radio', () => {
  const template = '@ecl/radio/radio-group.html.twig';
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

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataDefault, true))
      ).toHaveNoViolations();
    });
  });

  describe('Optional', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataOptional)).resolves.toMatchSnapshot();
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
