import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getFormControls } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataDefault from '@ecl/specs-component-datepicker/demo/data';
import datepicker from './datepicker.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    ...getFormControls(data),
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
  data.icons_path = defaultSprite;
  data.width = 'm';

  return Object.assign(data, args);
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
