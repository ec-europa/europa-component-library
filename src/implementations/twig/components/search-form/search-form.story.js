import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-search-form/demo/data';
import searchForm from './search-form.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    button_label: {
      name: 'button label',
      type: { name: 'string', required: true },
      defaultValue: data.button.label,
      description: 'Label of the search button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: true },
      defaultValue: data.text_input.placeholder,
      description: 'Label of the placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    invalid: {
      name: 'invalid',
      type: 'boolean',
      defaultValue: false,
      description: `Marks the search form as invalid`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'States',
      },
    },
    disabled: {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      description: `Disabled search form`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'States',
      },
    },
  };
};

const prepareData = (data, args) => {
  data.text_input.disabled = args.disabled;
  data.text_input.invalid = args.invalid;
  data.text_input.placeholder = args.placeholder;
  data.button.label = args.button_label;
  data.button.disabled = args.disabled;
  data.button.invalid = args.invalid;

  return correctSvgPath(data);
};

export default {
  title: 'Components/Forms/Search Form',
};

export const Default = (args) => searchForm(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode];
