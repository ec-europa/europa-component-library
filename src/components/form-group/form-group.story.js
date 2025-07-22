import { withNotes } from '@ecl/storybook-addon-notes';
import { getFormControls, correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataText from '@ecl/text-input/demo/data';
import dataSingle from '@ecl/select/demo/data-single';
import dataMultiple from '@ecl/select/demo/data-multiple';
import dataDefault from '@ecl/radio/demo/data--default';
import dataBinary from '@ecl/radio/demo/data--binary';
import dataTextarea from '@ecl/text-area/demo/data';
import dataDatepicker from '@ecl/datepicker/demo/data';
import dataCheckbox from '@ecl/checkbox/demo/data';
import dataRange from '@ecl/range/demo/data';
import dataRatingField from '@ecl/rating-field/demo/data';
import dataFileUpload from '@ecl/file-upload/demo/data';
import dataFileUploadMultiple from '@ecl/file-upload/demo/data--multiple';

import formGroup from './form-group.html.twig';
import notes from './README.md';

const dataStandaloneCheckbox = {
  ...dataCheckbox,
  input: {
    ...dataCheckbox.input,
    standalone: true,
    items: [dataCheckbox.input.items[0]],
  },
};

const getArgs = (data) => {
  const args = {
    hide_label: false,
    show_helper: true,
    show_error: true,
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required || false,
    label: data.label || '',
    helper_text: data.helper_text,
    invalid_text: data.invalid_text,
    optional_text: data.optional_text,
    required_text: data.required_text,
    input: {
      input_type: data.input.input_type,
    },
  };

  if (data.input.width) {
    args.width = data.input.width;
  }

  if (data.input.name) {
    args.name = data.input.name;
  }

  if (data.input.input_type === 'select' && data.input.multiple) {
    args.show_select_all = true;
    args.show_search = true;
  }

  Object.assign(args.input, data.input);

  return args;
};

const getArgTypes = (data, type) => ({
  ...getFormControls(data, type),
  ...(data.input.multiple && data.input.input_type === 'select'
    ? {
        show_select_all: {
          name: 'select all',
          type: { name: 'boolean' },
          mapping: {
            0: false,
            1: true,
          },
          table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'true' },
            category: 'Optional',
          },
        },
        show_search: {
          name: 'search field',
          type: { name: 'boolean' },
          mapping: {
            0: false,
            1: true,
          },
          table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'true' },
            category: 'Optional',
          },
        },
      }
    : {}),
});

const withDuet = (Story) => {
  const container = document.createElement('div');

  // Load assets only once
  if (!document.querySelector('link[href*="duet/themes/default.css"]')) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href =
      'https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/themes/default.css';
    document.head.appendChild(style);

    const scriptModule = document.createElement('script');
    scriptModule.type = 'module';
    scriptModule.src =
      'https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.esm.js';
    document.head.appendChild(scriptModule);

    const scriptNoModule = document.createElement('script');
    scriptNoModule.setAttribute('nomodule', '');
    scriptNoModule.src =
      'https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.js';
    document.head.appendChild(scriptNoModule);
  }

  // Inject styles
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    :root {
      --duet-font: Inter, sans-serif;
    }

    .duet-date__day,
    .duet-date__day:hover::before,
    .duet-date__day.is-today::before {
      border-radius: 0;
    }

    .duet-date__dialog.is-left {
      width: 100%;
    }

    .duet-date__header > div {
      flex-grow: 1;
    }

    .duet-date__dialog-content {
      margin-inline-start: 0;
      max-width: 100%;
    }

    .duet-date__select {
      border: 1px solid var(--c-d);
      border-radius: 0;
      height: 3rem;
    }

    .duet-date__select:last-child {
      margin-inline-start: var(--s-m);
    }
  `;
  document.head.appendChild(styleTag);

  // Render the story content
  const storyResult = Story();

  // Handle string or Node
  if (typeof storyResult === 'string') {
    container.innerHTML = storyResult;
  } else if (storyResult instanceof Node) {
    container.appendChild(storyResult);
  }

  // Setup date-picker once rendered
  const DATE_FORMAT_EU = /^(\d{2})-(\d{2})-(\d{4})$/;

  const applyCustomizations = () => {
    const picker = container.querySelector('duet-date-picker');
    if (!picker) return;

    picker.localization = {
      prevMonthLabel: 'Previous month',
      nextMonthLabel: 'Next month',
      monthSelectLabel: 'Month',
      yearSelectLabel: 'Year',
      closeLabel: 'Close window',
      calendarHeading: 'Choose a date',
      selectedDateMessage: 'Selected date is',
      buttonLabel: 'Choose date',
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthNamesShort: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      placeholder: 'DD-MM-YYYY',
    };

    picker.direction = 'left';

    picker.dateAdapter = {
      parse(value = '', createDate) {
        const matches = value.match(DATE_FORMAT_EU);
        if (matches) {
          return createDate(matches[3], matches[2], matches[1]);
        }
      },
      format(date) {
        const pad = (n) => String(n).padStart(2, '0');
        return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`;
      },
    };
  };

  // Wait a tick then apply (can also wrap in MutationObserver if needed)
  setTimeout(applyCustomizations, 50);

  return container;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  Object.assign(clone, args);
  correctPaths(clone);

  if (!args.show_error) {
    clone.invalid_text = '';
  }
  if (!args.show_helper) {
    clone.helper_text = '';
  }
  if (args.width) {
    clone.input.width = args.width;
  }
  if (clone.input.input_type === 'select' && clone.input.multiple) {
    clone.input.multiple_select_all = !!args.show_select_all;
    clone.input.multiple_search = !!args.show_search;
  }
  if (clone.input.input_type === 'checkbox') {
    if (clone.input.standalone && args.hide_label) {
      clone.input.items[0].required_text = args.required_text;
      clone.input.items[0].label_aria_required = clone.label_aria_required;
      clone.input.items[0].optional_text = args.optional_text;
      clone.input.items[0].label_aria_optional = clone.label_aria_optional;
    } else {
      delete clone.input.items[0].required_text;
      delete clone.input.items[0].label_aria_required;
      delete clone.input.items[0].optional_text;
      delete clone.input.items[0].label_aria_optional;
    }
  }

  return clone;
};

export default {
  title: 'Components/Forms',
  decorators: [withCode, withNotes],
};

export const Text = (_, { loaded: { component } }) => component;

Text.render = async (args) => {
  const renderedText = await formGroup(prepareData(dataText, args));
  return renderedText;
};
Text.storyName = 'Text input';
Text.args = getArgs(dataText);
Text.argTypes = getArgTypes(dataText, 'element');
Text.parameters = { notes: { markdown: notes, json: dataText } };

export const Textarea = (_, { loaded: { component } }) => component;

Textarea.render = async (args) => {
  const renderedTextArea = await formGroup(prepareData(dataTextarea, args));
  return renderedTextArea;
};
Textarea.storyName = 'Textarea';
Textarea.args = { ...getArgs(dataTextarea), width: 'm' };
Textarea.argTypes = getArgTypes(
  {
    ...dataTextarea,
    width: {
      type: 'select',
      options: ['s', 'm', 'l'],
      description: 'Width of the element',
    },
  },
  'element',
);
Textarea.parameters = { notes: { markdown: notes, json: dataTextarea } };

export const StandaloneCheckbox = (_, { loaded: { component } }) => component;

StandaloneCheckbox.render = async (args) => {
  const renderedStandaloneCheckbox = await formGroup(
    prepareData(dataStandaloneCheckbox, args),
  );
  return renderedStandaloneCheckbox;
};
StandaloneCheckbox.storyName = 'Checkbox';
StandaloneCheckbox.args = {
  ...getArgs(dataStandaloneCheckbox),
  show_helper: false,
  hide_label: true,
};
StandaloneCheckbox.argTypes = getArgTypes(dataStandaloneCheckbox, 'group');
StandaloneCheckbox.parameters = {
  notes: { markdown: notes, json: dataStandaloneCheckbox },
};

export const Checkbox = (_, { loaded: { component } }) => component;

Checkbox.render = async (args) => {
  const renderedCheckbox = await formGroup(prepareData(dataCheckbox, args));
  return renderedCheckbox;
};
Checkbox.storyName = 'Checkbox group';
Checkbox.args = getArgs(dataCheckbox);
Checkbox.argTypes = getArgTypes(dataCheckbox, 'group');
Checkbox.parameters = { notes: { markdown: notes, json: dataCheckbox } };

export const Date = (_, { loaded: { component } }) => component;

Date.render = async () => {
  const renderedDate = await formGroup({
    label: 'Select a date',
    helper_text:
      'You can type the date or select it from the datepicker, if available',
    input: { input_type: 'date' },
  });
  return renderedDate;
};
Date.storyName = 'Date input field';

export const DateDuet = (_, { loaded: { component } }) => component;

DateDuet.render = async () => {
  const renderedDateDuet = await formGroup({
    label: 'Select a date',
    helper_text: 'Format: dd-mm-yyyy',
    input: { input_type: 'duet' },
  });
  return renderedDateDuet;
};
DateDuet.storyName = 'Duet datepicker';
DateDuet.decorators = [withDuet];
DateDuet.parameters = {
  styleToggle: {
    styleSheets: [
      {
        id: 'ecl-reset',
        href: './styles/optional/ecl-reset.css',
        picked: true,
        group: 'others',
      },
      {
        id: 'ecl-ec-default',
        href: './styles/optional/ecl-ec-default.css',
        picked: false,
        group: 'screen',
      },
      {
        id: 'ecl-ec',
        href: './styles/ecl-ec.css',
        picked: true,
        group: 'screen',
      },
      {
        id: 'ecl-ec-color-modes',
        href: './styles/ecl-ec-color-modes.css',
        picked: true,
        group: 'others',
      },
      {
        id: 'ecl-ec-utilities',
        href: './styles/optional/ecl-ec-utilities.css',
        picked: true,
        group: 'others',
      },
      {
        id: 'ecl-rtl',
        href: './styles/optional/ecl-rtl.css',
        picked: false,
        group: 'others',
      },
      {
        id: 'ecl-ec-default-print',
        href: './styles/optional/ecl-ec-default-print.css',
        picked: false,
        group: 'print',
      },
      {
        id: 'ecl-ec-print',
        href: './styles/ecl-ec-print.css',
        picked: false,
        group: 'print',
      },
    ],
  },
};

export const Datepicker = (_, { loaded: { component } }) => component;

Datepicker.render = async (args) => {
  const renderedDatepicker = await formGroup(prepareData(dataDatepicker, args));
  return renderedDatepicker;
};
Datepicker.storyName = 'Datepicker';
Datepicker.args = getArgs(dataDatepicker);
Datepicker.argTypes = getArgTypes(dataDatepicker, 'element');
Datepicker.parameters = { notes: { markdown: notes, json: dataDatepicker } };

export const FileUpload = (_, { loaded: { component } }) => component;

FileUpload.render = async (args) => {
  const renderedFileUpload = await formGroup(prepareData(dataFileUpload, args));
  return renderedFileUpload;
};
FileUpload.storyName = 'File upload';
FileUpload.args = getArgs(dataFileUpload);
FileUpload.argTypes = getArgTypes(dataFileUpload, 'element');
FileUpload.parameters = { notes: { markdown: notes, json: dataFileUpload } };

export const FileUploadMultiple = (_, { loaded: { component } }) => component;

FileUploadMultiple.render = async (args) => {
  const renderedFileUpload = await formGroup(
    prepareData(dataFileUploadMultiple, args),
  );
  return renderedFileUpload;
};
FileUploadMultiple.storyName = 'File upload multiple';
FileUploadMultiple.args = getArgs(dataFileUploadMultiple);
FileUploadMultiple.argTypes = getArgTypes(dataFileUploadMultiple, 'element');
FileUploadMultiple.parameters = {
  notes: { markdown: notes, json: dataFileUploadMultiple },
};

export const Radio = (_, { loaded: { component } }) => component;

Radio.render = async (args) => {
  const renderedRadio = await formGroup(prepareData(dataBinary, args));
  return renderedRadio;
};
Radio.storyName = 'Radio';
Radio.args = getArgs(dataBinary);
Radio.argTypes = getArgTypes(dataBinary, 'element');
Radio.parameters = { notes: { markdown: notes, json: dataBinary } };

export const RadioGroup = (_, { loaded: { component } }) => component;

RadioGroup.render = async (args) => {
  const renderedRadioGroup = await formGroup(prepareData(dataDefault, args));
  return renderedRadioGroup;
};
RadioGroup.storyName = 'Radio group';
RadioGroup.args = getArgs(dataDefault);
RadioGroup.argTypes = getArgTypes(dataDefault, 'group');
RadioGroup.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Range = (_, { loaded: { component } }) => component;

Range.render = async (args) => {
  const renderedRange = await formGroup(prepareData(dataRange, args));
  return renderedRange;
};
Range.storyName = 'Range';
Range.args = { ...getArgs(dataRange), width: 'm' };
Range.argTypes = getArgTypes(dataRange, 'element');
Range.parameters = { notes: { markdown: notes, json: dataRange } };

export const RatingField = (_, { loaded: { component } }) => component;

RatingField.render = async (args) => {
  const renderedRatingField = await formGroup(
    prepareData(dataRatingField, args),
  );
  return renderedRatingField;
};
RatingField.storyName = 'Rating field';
RatingField.args = getArgs(dataRatingField);
RatingField.argTypes = getArgTypes(dataRatingField, 'element');
RatingField.parameters = { notes: { markdown: notes, json: dataRatingField } };

export const Select = (_, { loaded: { component } }) => component;

Select.render = async (args) => {
  const renderedSelect = await formGroup(prepareData(dataSingle, args));
  return renderedSelect;
};
Select.storyName = 'Select';
Select.args = getArgs(dataSingle);
Select.argTypes = getArgTypes(dataSingle, 'element');
Select.parameters = { notes: { markdown: notes, json: dataSingle } };

export const SelectMultiple = (_, { loaded: { component } }) => component;

SelectMultiple.render = async (args) => {
  const renderedSelectMultiple = await formGroup(
    prepareData(dataMultiple, args),
  );
  return renderedSelectMultiple;
};
SelectMultiple.storyName = 'Select multiple';
SelectMultiple.args = getArgs(dataMultiple);
SelectMultiple.argTypes = getArgTypes(dataMultiple, 'element');
SelectMultiple.parameters = { notes: { markdown: notes, json: dataMultiple } };
