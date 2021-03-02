import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import enData from '@ecl/specs-component-menu/demo/data--en';
import frData from '@ecl/specs-component-menu/demo/data--fr';
import menu from './menu.html.twig';
import notes from './README.md';

if (getSystem() === 'eu') {
  delete enData.site_name;
  delete frData.site_name;
}

const getArgTypes = (data) => {
  return {
    site_name: {
      name: 'site name',
      type: { name: 'string' },
      defaultValue: data.site_name,
      description: 'The name of the site',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
  };
};

const prepareData = (data, args) => {
  correctSvgPath(data);

  if (data.site_name) {
    data.site_name = args.site_name;
  }

  return data;
};

export default {
  title: 'Components/Navigation/Menu',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => menu(prepareData(enData, args));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };
if (enData.site_name) {
  Default.argTypes = getArgTypes(enData);
} else {
  Default.parameters.controls = { disable: true };
}

export const Translated = (args) => menu(prepareData(frData, args));

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
if (frData.site_name) {
  Translated.argTypes = getArgTypes(frData);
} else {
  Translated.parameters.controls = { disable: true };
}
