import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoDataEc from '@ecl/specs-component-search-form/demo/data--ec';
import demoDataEu from '@ecl/specs-component-search-form/demo/data--eu';
import searchForm from './search-form.html.twig';
import notes from './README.md';

const system = getSystem();
const dataDefault = system === 'eu' ? demoDataEu : demoDataEc;

const getArgs = (data) => ({
  disabled: false,
  button_label: data.button.label || '',
  placeholder: data.text_input.placeholder,
});

const getArgTypes = () => ({
  button_label: {
    name: 'button label',
    type: { name: 'string', required: true },
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
    description: 'Label of the placeholder',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  disabled: {
    name: 'disabled',
    type: 'boolean',
    description: `Disabled search form`,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  },
});

const prepareData = (data, args) => {
  data.text_input.disabled = args.disabled;
  data.text_input.placeholder = args.placeholder;
  data.button.label = args.button_label;
  data.button.disabled = args.disabled;

  return correctPaths(data);
};

export default {
  title: 'Components/Forms/Search Form',
};

export const Default = (args) => searchForm(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode];
