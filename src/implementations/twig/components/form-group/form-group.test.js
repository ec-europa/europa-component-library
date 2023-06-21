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

  describe('Text field', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataText, input: 'text' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataText, {
        input: 'text',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataText, {
        input: 'text',
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
        input: 'text',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataText, { disabled: true, input: 'text' });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataText, {
        input: 'text',
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(template, { ...dataText, input: 'text' }, true)
        )
      ).toHaveNoViolations();
    });
  });

  describe('Radio', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataDefault, input: 'radio' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        input: 'radio',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDefault, {
        input: 'radio',
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
        input: 'radio',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataDefault, {
        disabled: true,
        input: 'radio',
      });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataDefault, {
        invalid: true,
        invalid_text: 'Invalid text',
        input: 'radio',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(
            template,
            { ...dataDefault, input: 'radio' },
            true
          )
        )
      ).toHaveNoViolations();
    });
  });

  describe('Select', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataSingle, input: 'select' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataSingle, {
        input: 'select',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataSingle, {
        input: 'select',
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
        input: 'select',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataSingle, {
        disabled: true,
        input: 'select',
      });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataSingle, {
        input: 'select',
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(
            template,
            { ...dataSingle, input: 'select' },
            true
          )
        )
      ).toHaveNoViolations();
    });
  });

  describe('File Upload', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataFile, input: 'file' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataFile, {
        input: 'file',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataFile, {
        input: 'file',
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
        input: 'file',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataFile, { disabled: true, input: 'file' });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataFile, {
        invalid: true,
        invalid_text: 'Invalid text',
        input: 'file',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(template, { ...dataFile, input: 'file' }, true)
        )
      ).toHaveNoViolations();
    });
  });

  describe('Rating field', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataRatingField, input: 'rating-field' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataRatingField, {
        input: 'rating-field',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataRatingField, {
        input: 'rating-field',
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
        input: 'rating-field',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataRatingField, {
        disabled: true,
        input: 'rating-field',
      });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataRatingField, {
        input: 'rating-field',
        invalid: true,
        invalid_text: 'Invalid text',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(
            template,
            { ...dataRatingField, input: 'rating-field' },
            true
          )
        )
      ).toHaveNoViolations();
    });
  });

  describe('Range field', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataRange, input: 'range' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataRange, {
        input: 'range',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataRange, {
        input: 'range',
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
        input: 'range',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataRange, { disabled: true, input: 'range' });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataRange, {
        invalid: true,
        invalid_text: 'Invalid text',
        input: 'range',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(template, { ...dataRange, input: 'range' }, true)
        )
      ).toHaveNoViolations();
    });
  });

  describe('Textarea', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataTextarea, input: 'textarea' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataTextarea, {
        input: 'textarea',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataTextarea, {
        input: 'textarea',
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
        input: 'textarea',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataTextarea, {
        disabled: true,
        input: 'textarea',
      });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataTextarea, {
        invalid: true,
        invalid_text: 'Invalid text',
        input: 'textarea',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(
            template,
            { ...dataTextarea, input: 'textarea' },
            true
          )
        )
      ).toHaveNoViolations();
    });
  });

  describe('Checkbox', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataCheckbox, input: 'checkbox' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataCheckbox, {
        input: 'checkbox',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataCheckbox, {
        input: 'checkbox',
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
        input: 'checkbox',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataCheckbox, {
        disabled: true,
        input: 'checkbox',
      });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataCheckbox, {
        invalid: true,
        invalid_text: 'Invalid text',
        input: 'checkbox',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(
            template,
            { ...dataCheckbox, input: 'checkbox' },
            true
          )
        )
      ).toHaveNoViolations();
    });
  });

  describe('Datepicker', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataDatepicker, input: 'datepicker' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDatepicker, {
        input: 'datepicker',
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDatepicker, {
        input: 'datepicker',
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
        input: 'datepicker',
        required: true,
        required_text: '*',
      });
      return expect(render(dataRequired)).resolves.toMatchSnapshot();
    });

    test('renders correctly when disabled', () => {
      expect.assertions(1);
      const dataDisabled = merge(dataDatepicker, {
        disabled: true,
        input: 'datepicker',
      });
      return expect(render(dataDisabled)).resolves.toMatchSnapshot();
    });

    test('renders correctly when invalid', () => {
      expect.assertions(1);
      const dataInvalid = merge(dataDatepicker, {
        invalid: true,
        invalid_text: 'Invalid text',
        input: 'datepicker',
      });
      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(
            template,
            { ...dataDatepicker, input: 'datepicker' },
            true
          )
        )
      ).toHaveNoViolations();
    });
  });
});
