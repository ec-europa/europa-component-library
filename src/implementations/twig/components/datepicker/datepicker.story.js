import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getFormControls, correctSvgPath } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-datepicker/demo/data';
import datepicker from './datepicker.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, 'element'),
    autoinit: {
      name: 'autoinit',
      type: 'boolean',
      defaultValue: data.autoinit,
      description: 'Initializes the javascript behaviours.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'States',
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(correctSvgPath(data), args);
};

export default {
  title: 'Components/Forms/Datepicker',
  parameters: {
    knobs: {
      disable: true,
    },
  },
};

export const Default = (args) => datepicker(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode];
