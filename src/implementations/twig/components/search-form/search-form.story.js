import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-search-form/demo/data';
import searchForm from './search-form.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    input_label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: 'The form element label (hidden via css)',
      defaultValue: data.text_input.label,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    button_label: {
      name: 'label of the submit button',
      type: { name: 'string', required: true },
      defaultValue: data.button.label,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  data.text_input.label = args.input_label;
  data.button.label = args.button_label;

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
