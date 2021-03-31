import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import uiIcons from '@ecl/resources-ec-icons/dist/lists/ui.json';
import dataDefault from '@ecl/specs-component-link/demo/data--default';
import dataCta from '@ecl/specs-component-link/demo/data--cta';
import dataStandalone from '@ecl/specs-component-link/demo/data--standalone';
import dataNegative from '@ecl/specs-component-link/demo/data--negative';

import link from './link.html.twig';
import notes from './README.md';

const system = getSystem();

const withParagraph = (story) => {
  const demo = story();
  return `<p class="ecl-u-type-paragraph ecl-u-ma-none">The European Commission is the executive of ${demo} and promotes its general interest.</p>`;
};

const withNegative = (story, controls) => {
  const demo = story();
  return controls.args.negative
    ? `<div class="ecl-u-bg-blue ecl-u-type-color-white ecl-u-pa-xs">${demo}</div>`
    : demo;
};

const getArgTypes = (data) => {
  return {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: data.link.label,
      description: 'The link label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
    negative: {
      name: 'negative',
      type: { name: 'boolean' },
      defaultValue: data.link.negative,
      description: 'Negative link (light on dark)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Content',
      },
      control: {
        type: 'boolean',
      },
    },
    no_visited: {
      name: 'no visited',
      type: { name: 'boolean' },
      defaultValue: data.link.no_visited,
      description: 'No change of color for visited link',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Content',
      },
      control: {
        type: 'boolean',
      },
    },
    icon_name: {
      name: 'icon name',
      type: { name: 'select', required: false },
      description: 'Name of the icon',
      table: {
        type: { summary: 'string' },
        category: 'Icon',
      },
      control: {
        type: 'select',
        options: uiIcons,
      },
    },
    icon_transform: {
      name: 'icon transform',
      type: { name: 'select' },
      description: 'Link icon transform',
      table: {
        type: { summary: 'string' },
        category: 'Icon',
      },
      control: {
        type: 'select',
        options: [
          'rotate-90',
          'rotate-180',
          'rotate-270',
          'flip-horizontal',
          'flip-vertical',
        ],
      },
    },
    icon_position: {
      name: 'icon position',
      type: { name: 'inline-radio' },
      description: 'Icon position inside the link',
      defaultValue: 'after',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'after' },
        category: 'Icon',
      },
      control: {
        type: 'inline-radio',
        options: ['before', 'after'],
      },
    },
  };
};

const prepareData = (data, args) => {
  data.link.label = args.label;
  data.link.negative = args.negative;
  data.link.no_visited = args.no_visited;
  data.link.icon_position = args.icon_position;
  if (args.icon_name) {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.type = 'ui';
    data.icon.transform = args.icon_transform;
    data.icon.size = system === 'eu' ? 'm' : 'xs';
    data.icon.path = 'icon.svg';
  }
  correctSvgPath(data);

  return data;
};

const prepareDataCta = (data, args) => {
  const dataCustom = prepareData(data, args);
  if (dataCustom.icon) {
    data.icon.size = system === 'eu' ? 's' : 'xs';
  }

  return dataCustom;
};

export default {
  title: 'Components/Navigation/Link',
  decorators: [withNotes, withCode, withNegative],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => link(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.decorators = [withNotes, withCode, withParagraph, withNegative];
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Standalone = (args) => link(prepareData(dataStandalone, args));

Standalone.storyName = 'standalone';
Standalone.argTypes = getArgTypes(dataStandalone);
Standalone.parameters = { notes: { markdown: notes, json: dataStandalone } };

export const Cta = (args) => link(prepareDataCta(dataCta, args));

Cta.storyName = 'cta';
Cta.argTypes = getArgTypes(dataCta);
Cta.parameters = { notes: { markdown: notes, json: dataCta } };

export const Negative = (args) => link(prepareData(dataNegative, args));

Negative.storyName = 'negative';
Negative.decorators = [withNotes, withCode, withParagraph, withNegative];
Negative.argTypes = getArgTypes(dataNegative);
Negative.parameters = { notes: { markdown: notes, json: dataNegative } };
