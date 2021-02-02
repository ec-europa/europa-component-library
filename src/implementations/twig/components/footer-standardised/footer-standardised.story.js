/* eslint-disable no-undef */
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import specsEc from '@ecl/specs-component-footer-standardised/demo/data--ec';
import specsEu from '@ecl/specs-component-footer-standardised/demo/data--eu';
import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/en.svg';
import footer from './footer-standardised.html.twig';
import notes from './README.md';

const getArgTypes = (system) => {
  const argTypes = {};
  argTypes.hide_contact = {
    name: system === 'EU' ? 'contact site name' : 'contact us',
    type: { name: 'boolean' },
    defaultValue: false,
    description:
      system === 'EU'
        ? 'Hide "Contact site name" section'
        : 'Hide "Contact us" section',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  argTypes.hide_follow = {
    name: 'follow us',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Hide "Follow us" section',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  if (system !== 'EU') {
    argTypes.hide_about = {
      name: 'about us',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Hide "About us" section',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'States',
      },
    };
  }

  argTypes.hide_relate_site = {
    name: system === 'EU' ? 'optional links' : 'related sites',
    type: { name: 'boolean' },
    defaultValue: false,
    description:
      system === 'EU'
        ? 'Hide "Optional links" section'
        : 'Hide "Related sites" section',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  if (system !== 'EU') {
    argTypes.hide_class_name = {
      name: 'class name',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'hide "Class name" section',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'States',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args, system) => {
  correctSvgPath(data);

  if (data.rows[1][0][0].logo) {
    data.rows[1][0][0].logo.src_mobile = logoEuMobile;
    data.rows[1][0][0].logo.src_desktop = logoEuDesktop;
  }

  const res = JSON.parse(JSON.stringify(data));
  if (args.hide_contact === true) {
    res.rows[0][1].splice(0, 1);
  }
  if (args.hide_follow === true) {
    res.rows[0][1].splice(1, 1);
  }
  if (args.hide_about === true) {
    res.rows[0][2].splice(0, 1);
  }
  if (args.hide_relate_site === true) {
    res.rows[0][2].splice(1, 1);
  }
  if (args.hide_class_name === true) {
    res.rows.splice(1, 1);
  }
  if (args.hide_about === true && args.hide_relate_site === true) {
    res.rows[0].splice(2, 1);
  }
  if (args.hide_relate_site === true && system === 'EU') {
    res.rows[0].splice(2, 1);
  }
  if (args.hide_contact === true && args.hide_follow === true) {
    res.rows[0].splice(1, 1);
  }

  return res;
};

export default {
  title: 'Components/Footers/Standardised',
  decorators: [withCode, withNotes],
  parameters: {
    knobs: { disable: true },
  },
};

const system = process.env.STORYBOOK_SYSTEM;
const data = system === 'EU' ? specsEu : specsEc;

export const Default = (args) => footer(prepareData(data, args, system));

Default.storyName = 'default';
Default.argTypes = getArgTypes(system);
Default.parameters = { notes: { markdown: notes, json: data } };
