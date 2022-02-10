import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataCore from '@ecl/specs-component-site-footer/demo/data-core--ec';
import dataStandardised from '@ecl/specs-component-site-footer/demo/data-standardised--ec';
import dataHarmonised from '@ecl/specs-component-site-footer/demo/data-harmonised-group1--ec';
import logoEc from '@ecl/resources-ec-logo/negative/logo-ec--en.svg';
import footer from './site-footer.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    hide_contact: true,
    hide_follow: true,
    hide_relate_site: true,
    hide_logo: true,
  };
  args.hide_about = true;

  return args;
};

const getArgTypes = () => {
  const argTypes = {};
  argTypes.hide_contact = {
    name: 'contact us',
    type: { name: 'boolean' },
    description: 'Show "Contact us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_logo = {
    name: 'logo',
    type: { name: 'boolean' },
    description: 'Show logo',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_follow = {
    name: 'follow us',
    type: { name: 'boolean' },
    description: 'Show "Follow us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_about = {
    name: 'about us',
    type: { name: 'boolean' },
    description: 'Show "About us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_relate_site = {
    name: 'related sites',
    type: { name: 'boolean' },
    description: 'Show "Related sites" section',
    table: {
      category: 'Optional sections',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctSvgPath(data);
  const res = JSON.parse(JSON.stringify(data));
  if (res.variant === 'core') {
    res.rows[0][0][0].logo.src_desktop = logoEc;
    return res;
  }

  res.rows[2][0][0].logo.src_desktop = logoEc;
  if (!args.hide_logo && res.rows[1][0][0].logo) {
    delete res.rows[1][0][0].logo;
  }
  if (!args.hide_logo && res.rows[2]) {
    delete res.rows[2][0][0].logo;
  }
  if (!args.hide_contact) {
    res.rows[0][1].splice(0, 1);
  }
  if (!args.hide_follow) {
    res.rows[0][1].splice(1, 1);
  }
  if (!args.hide_relate_site) {
    res.rows[0][2].splice(1, 1);
  }
  if (!args.hide_about) {
    res.rows[0][2].splice(0, 1);
  }
  if (!args.hide_about && !args.hide_relate_site) {
    res.rows[0].splice(2, 1);
  }
  if (!args.hide_contact && !args.hide_follow) {
    res.rows[0].splice(1, 1);
  }

  return res;
};

export default {
  title: 'Components/Site-wide/Site footer',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => footer(prepareData(dataCore, args));

Default.storyName = 'core';
Default.parameters = {
  controls: { disable: true },
  notes: { markdown: notes, json: dataCore },
};

export const Standardised = (args) =>
  footer(prepareData(dataStandardised, args));

Standardised.storyName = 'standardised';
Standardised.args = getArgs();
Standardised.argTypes = getArgTypes();
Standardised.parameters = {
  notes: { markdown: notes, json: dataStandardised },
};

export const Harmonised = (args) => footer(prepareData(dataHarmonised, args));

Harmonised.storyName = 'Harmonised';
Harmonised.args = getArgs();
Harmonised.argTypes = getArgTypes();
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
