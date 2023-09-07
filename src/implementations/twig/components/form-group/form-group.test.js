import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import dataText from '@ecl/specs-component-text-input/demo/data';
import dataSingle from '@ecl/specs-component-select/demo/data-single';
import dataDefault from '@ecl/specs-component-radio/demo/data--default';
import dataTextarea from '@ecl/specs-component-text-area/demo/data';
import dataDatepicker from '@ecl/specs-component-datepicker/demo/data';
import dataCheckbox from '@ecl/specs-component-checkbox/demo/data';
import dataRange from '@ecl/specs-component-range/demo/data';
import dataRatingField from '@ecl/specs-component-rating-field/demo/data';
import dataFile from '@ecl/specs-component-file-upload/demo/data';

expect.extend(toHaveNoViolations);

describe('Form group ', () => {
  const template = '@ecl/form-group/form-group.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('with Text field', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataText)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataText, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataText, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataText, {
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataText, { disabled: true });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataText, {
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataText, true)),
      ).toHaveNoViolations();
    });
  });

  describe('with Radio', () => {
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
      const dataDisabled = merge(dataDefault, {
        disabled: true,
      });
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

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataDefault, true)),
      ).toHaveNoViolations();
    });
  });

  describe('with Select', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSingle)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataSingle, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataSingle, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataSingle, {
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataSingle, {
        disabled: true,
      });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataSingle, {
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataSingle, true)),
      ).toHaveNoViolations();
    });
  });

  describe('with File Upload', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataFile)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataFile, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataFile, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataFile, {
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataFile, { disabled: true });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataFile, {
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataFile, true)),
      ).toHaveNoViolations();
    });
  });

  describe('with Rating field', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataRatingField)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataRatingField, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataRatingField, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataRatingField, {
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataRatingField, {
        disabled: true,
      });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataRatingField, {
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataRatingField, true)),
      ).toHaveNoViolations();
    });
  });

  describe('with Range field', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataRange)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataRange, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataRange, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataRange, {
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataRange, {
        disabled: true,
      });

      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataRange, {
        invalid: true,
        invalid_text: 'Invalid text',
      });

      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataRange, true)),
      ).toHaveNoViolations();
    });
  });

  describe('with Textarea', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataTextarea)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataTextarea, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataTextarea, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataTextarea, {
        required: true,
        required_text: '*',
      });

      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataTextarea, {
        disabled: true,
      });

      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataTextarea, {
        invalid: true,
        invalid_text: 'Invalid text',
      });

      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataTextarea, true)),
      ).toHaveNoViolations();
    });
  });

  describe('with Checkbox', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataCheckbox)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataCheckbox, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataCheckbox, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataCheckbox, {
        required: true,
        required_text: '*',
      });

      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataCheckbox, {
        invalid: true,
        invalid_text: 'Invalid text',
      });

      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCheckbox, true)),
      ).toHaveNoViolations();
    });
  });

  describe('with Datepicker', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDatepicker)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDatepicker, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDatepicker, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when required', () => {
      expect.assertions(1);
      const dataRequired = merge(dataDatepicker, {
        required: true,
        required_text: '*',
      });

      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataDatepicker, {
        disabled: true,
      });

      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataDatepicker, {
        invalid: true,
        invalid_text: 'Invalid text',
      });

      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataDatepicker, true)),
      ).toHaveNoViolations();
    });
  });
});
