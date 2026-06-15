import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataCore from './demo/data-core--ec';
import dataStandardised from './demo/data-standardised--ec';
import dataHarmonised from './demo/data-harmonised--ec';
import footer from './site-footer-ec.html.twig';
import notes from './README.md';

const getArgs = (variant) => {
  let args = {
    show_co_owner: true,
    show_feedback: true,
  };

  if (variant !== 'core') {
    args = {
      ...args,
      show_contact: true,
      show_about: true,
      show_more: true,
      show_related: true,
      show_custom: false,
      social_vertical: false,
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
  argTypes.show_feedback = {
    name: 'feedback',
    type: { name: 'boolean' },
    description: 'Show feedback section',
    table: {
      category: 'Optional sections',
    },
  };

  if (variant !== 'core') {
    argTypes.show_contact = {
      name: 'contact us',
      type: { name: 'boolean' },
      description: 'Show "Contact us" section',
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

    argTypes.show_more = {
      name: 'more information',
      type: { name: 'boolean' },
      description: 'Show "More information" section',
      table: {
        category: 'Optional sections',
      },
    };

    argTypes.show_related = {
      name: 'related links',
      type: { name: 'boolean' },
      description: 'Show "Related links" section',
      table: {
        category: 'Optional sections',
      },
    };

    argTypes.show_custom = {
      name: 'custom links',
      type: { name: 'boolean' },
      description: 'Show "Custom links" sections',
      table: {
        category: 'Optional sections',
      },
    };

    argTypes.social_vertical = {
      name: 'social vertical',
      type: { name: 'boolean' },
      description: 'Display social media vertically',
      table: {
        category: 'Display',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_co_owner) {
    delete clone.co_owner;
  }
  if (!args.show_feedback) {
    delete clone.section_feedback;
  }
  if (!args.show_contact) {
    delete clone.section_contact;
  }
  if (!args.show_about) {
    delete clone.section_about;
  }
  if (!args.show_more) {
    delete clone.section_more;
  }
  if (!args.show_related) {
    delete clone.section_related;
  }
  if (!args.show_custom) {
    delete clone.sections_custom;
  }

  if (args.social_vertical) {
    clone.section_site_info.social_media.variant = 'vertical';
    clone.section_site_info.social_media.links.forEach((element) => {
      element.link.hide_label = false;
    });

    // Example with twice the same network, when displayed vertically
    clone.section_site_info.social_media.links[1].link.label =
      'Linkedin - link 1';
    clone.section_site_info.social_media.links[2].link.label =
      'Linkedin - link 2';
    clone.section_site_info.social_media.links[2].icon.name = 'linkedin';
  }

  return Object.assign(clone, args);
};

export default {
  title: 'Components/Site-wide/Site footer',
  decorators: [withCode, withNotes],
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      modes: {
        m: { disable: true },
        xl: { disable: true },
      },
    },
  },
};

export const Core = (_, { loaded: { component } }) => component;

Core.render = async (args) => {
  const renderedCore = await footer(prepareData(dataCore, args));
  return renderedCore;
};
Core.storyName = 'core';
Core.args = getArgs('core');
Core.argTypes = getArgTypes('core');
Core.parameters = {
  notes: { markdown: notes, json: dataCore },
};

export const Standardised = (_, { loaded: { component } }) => component;

Standardised.render = async (args) => {
  const renderedStandardised = await footer(
    prepareData(dataStandardised, args),
  );
  return renderedStandardised;
};
Standardised.storyName = 'standardised';
Standardised.args = getArgs('standardised');
Standardised.argTypes = getArgTypes('standardised');
Standardised.parameters = {
  notes: { markdown: notes, json: dataStandardised },
};

export const Harmonised = (_, { loaded: { component } }) => component;

Harmonised.render = async (args) => {
  const renderedHarmonised = await footer(prepareData(dataHarmonised, args));
  return renderedHarmonised;
};
Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs('harmonised');
Harmonised.argTypes = getArgTypes('harmonised');
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
