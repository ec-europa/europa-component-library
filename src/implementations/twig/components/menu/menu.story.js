import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import enSpecs from '@ecl/specs-component-menu/demo/data--en';
import frSpecs from '@ecl/specs-component-menu/demo/data--fr';
import menu from './menu.html.twig';
import notes from './README.md';

const enData = { ...enSpecs };
const frData = { ...frSpecs };

if (getSystem() === 'eu') {
  enData.site_name = '';
  frData.site_name = '';
}

const getArgTypes = (data) => {
  return {
    site_name: {
      name: 'site name',
      type: { name: 'string' },
      defaultValue: data.site_name,
      description: 'The name of the site (displayed only on mobile)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
    cta_link: {
      name: 'call to action',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Call to action link (optional)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Content',
      },
      control: {
        type: 'boolean',
      },
    },
  };
};

const prepareData = (data, args) => {
  correctSvgPath(data);
  data.site_name = args.site_name;
  if (!args.cta_link) {
    data.cta_link = {};
  }

  return data;
};

export default {
  title: 'Components/Navigation/Menu',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => menu(prepareData(enData, args));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };
Default.argTypes = getArgTypes(enData);

export const Translated = (args) => menu(prepareData(frData, args));

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
Translated.argTypes = getArgTypes(frData);
