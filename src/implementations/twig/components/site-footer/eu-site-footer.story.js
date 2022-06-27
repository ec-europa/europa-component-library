import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataCore from '@ecl/specs-component-site-footer/demo/data-core--eu';
import dataHarmonised from '@ecl/specs-component-site-footer/demo/data-harmonised--eu';
import logoEuMobile from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import footer from './site-footer.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    show_contact: true,
    show_follow: true,
    show_relate_site: true,
    show_logo: true,
    show_about: true,
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {};
  argTypes.show_contact = {
    name: 'contact site name',
    type: { name: 'boolean' },
    description: 'Show "Contact site name" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_logo = {
    name: 'logo',
    type: { name: 'boolean' },
    description: 'Show logo',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_follow = {
    name: 'follow us',
    type: { name: 'boolean' },
    description: 'Show "Follow us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_about = {
    name: 'about us',
    type: { name: 'boolean' },
    description: 'Show "About us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_relate_site = {
    name: 'optional links',
    type: { name: 'boolean' },
    description: 'Show "Optional links" section',
    table: {
      category: 'Optional sections',
    },
  };

  return argTypes;
};

const prepareCoreData = (data) => {
  correctPaths(data);
  data.rows[0][0][0].logo.src_mobile = logoEuMobile;
  data.rows[0][0][0].logo.src_desktop = logoEuDesktop;

  return data;
};

const prepareHarmonisedData = (data, args) => {
  correctPaths(data);

  const res = JSON.parse(JSON.stringify(data));
  res.rows[1][0][0].logo.src_mobile = logoEuMobile;
  res.rows[1][0][0].logo.src_desktop = logoEuDesktop;

  if (!args.show_logo && res.rows[1][0][0].logo) {
    delete res.rows[1][0][0].logo;
  }
  if (!args.show_logo && res.rows[2]) {
    delete res.rows[2][0][0].logo;
  }
  if (!args.show_contact) {
    res.rows[0][1].splice(0, 1);
  }
  if (!args.show_follow) {
    res.rows[0][1].splice(1, 1);
  }
  if (!args.show_about) {
    res.rows[0][2].splice(0, 1);
  }
  if (!args.show_relate_site) {
    res.rows[0].splice(2, 1);
  }
  if (!args.show_about && !args.show_relate_site) {
    res.rows[0].splice(2, 1);
  }
  if (!args.show_contact && !args.show_follow) {
    res.rows[0].splice(1, 1);
  }

  return res;
};

export default {
  title: 'Components/Site-wide/Site footer',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};

export const Core = () => footer(prepareCoreData(dataCore));

Core.storyName = 'core';
Core.parameters = {
  notes: { markdown: notes, json: dataCore },
  controls: { disable: true },
};

export const Harmonised = (args) =>
  footer(prepareHarmonisedData(dataHarmonised, args));

Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs();
Harmonised.argTypes = getArgTypes();
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
