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
const enCtaLinkClone = { ...enData.cta_link };
const frCtaLinkClone = { ...frData.cta_link };

if (getSystem() === 'eu') {
  enData.site_name = '';
  frData.site_name = '';
}

const getArgs = (data) => {
  return {
    site_name: data.site_name,
    cta_link: false,
  };
};

const getArgTypes = () => {
  return {
    site_name: {
      name: 'site name',
      type: { name: 'string' },
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

const prepareData = (data, demo, args) => {
  correctSvgPath(data);
  data.site_name = args.site_name;
  if (!args.cta_link) {
    delete data.cta_link;
  } else {
    data.cta_link = demo !== 'translated' ? enCtaLinkClone : frCtaLinkClone;
  }

  return data;
};

export default {
  title: 'Components/Navigation/Menu',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => menu(prepareData(enData, 'default', args));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };
Default.args = getArgs(enData);
Default.argTypes = getArgTypes();

export const Translated = (args) =>
  menu(prepareData(frData, 'translated', args));

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
Translated.args = getArgs(frData);
Translated.argTypes = getArgTypes();
