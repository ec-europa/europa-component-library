import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import logoEuMobile from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import dataCore from './demo/data-core--eu';
import dataHarmonised from './demo/data-harmonised--eu';
import footer from './site-footer-eu.html.twig';
import notes from './README.md';

const getArgs = (variant) => {
  let args = {
    show_co_owner: true,
  };

  if (variant !== 'core') {
    args = {
      ...args,
      show_contact: true,
      show_follow: true,
      show_relate_site: true,
      show_logo: true,
      show_about: true,
    };
  }

  return args;
};

const getArgTypes = (variant) => {
  const argTypes = {};
  argTypes.show_co_owner = {
    name: 'co-owner',
    type: { name: 'boolean' },
    description: 'Show co-owner banner',
    table: {
      category: 'Optional sections',
    },
  };

  if (variant !== 'core') {
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
  }

  return argTypes;
};

const prepareCoreData = (data, args) => {
  correctPaths(data);

  const clone = JSON.parse(JSON.stringify(data));
  if (!args.show_co_owner) {
    delete clone.co_owner;
  }

  clone.rows[0][0][0].logo.src_mobile = logoEuMobile;
  clone.rows[0][0][0].logo.src_desktop = logoEuDesktop;

  return clone;
};

const prepareHarmonisedData = (data, args) => {
  correctPaths(data);

  const clone = JSON.parse(JSON.stringify(data));
  if (!args.show_co_owner) {
    delete clone.co_owner;
  }

  clone.rows[1][0][0].logo.src_mobile = logoEuMobile;
  clone.rows[1][0][0].logo.src_desktop = logoEuDesktop;

  if (!args.show_logo && clone.rows[1][0][0].logo) {
    delete clone.rows[1][0][0].logo;
  }
  if (!args.show_logo && clone.rows[2]) {
    delete clone.rows[2][0][0].logo;
  }
  if (!args.show_contact) {
    clone.rows[0][1].splice(0, 1);
  }
  if (!args.show_follow) {
    clone.rows[0][1].splice(1, 1);
  }
  if (!args.show_about) {
    clone.rows[0][2].splice(0, 1);
  }
  if (!args.show_relate_site) {
    clone.rows[0].splice(2, 1);
  }
  if (!args.show_about && !args.show_relate_site) {
    clone.rows[0].splice(2, 1);
  }
  if (!args.show_contact && !args.show_follow) {
    clone.rows[0].splice(1, 1);
  }

  return clone;
};

export default {
  title: 'Components/Site-wide/Site footer',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};

export const Core = (_, { loaded: { component } }) => component;

Core.render = async (args) => {
  const renderedCore = await footer(prepareCoreData(dataCore, args));
  return renderedCore;
};
Core.storyName = 'core';
Core.args = getArgs('core');
Core.argTypes = getArgTypes('core');
Core.parameters = {
  notes: { markdown: notes, json: dataCore },
};

export const Harmonised = (_, { loaded: { component } }) => component;

Harmonised.render = async (args) => {
  const renderedHarmonised = await footer(
    prepareHarmonisedData(dataHarmonised, args),
  );
  return renderedHarmonised;
};
Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs('harmonised');
Harmonised.argTypes = getArgTypes('harmonised');
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
