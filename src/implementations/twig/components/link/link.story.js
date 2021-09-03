import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsAllEu from '@ecl/resources-eu-icons/dist/lists/all.json';
import dataDefault from '@ecl/specs-component-link/demo/data--default';
import dataCta from '@ecl/specs-component-link/demo/data--cta';
import dataPrimary from '@ecl/specs-component-link/demo/data--primary';
import dataSecondary from '@ecl/specs-component-link/demo/data--secondary';
import dataStandalone from '@ecl/specs-component-link/demo/data--standalone';
import dataNegative from '@ecl/specs-component-link/demo/data--negative';

import link from './link.html.twig';
import notes from './README.md';

const system = getSystem();
const iconsAll = system === 'eu' ? iconsAllEu : iconsAllEc;

// Create 'none' option.
iconsAll.unshift('none');

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

const getArgs = (data) => {
  return {
    label: data.link.label,
    negative: data.link.negative || false,
    no_visited: data.link.no_visited || false,
    icon_name: 'none',
    icon_position: 'after',
  };
};

const getArgTypes = () => {
  return {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
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
      options: iconsAll,
      description: 'Name of the icon',
      table: {
        type: { summary: 'string' },
        category: 'Icon',
      },
    },
    icon_transform: {
      name: 'icon transform',
      type: { name: 'select' },
      description: 'Link icon transform',
      options: [
        'rotate-90',
        'rotate-180',
        'rotate-270',
        'flip-horizontal',
        'flip-vertical',
      ],
      table: {
        type: { summary: 'string' },
        category: 'Icon',
      },
    },
    icon_position: {
      name: 'icon position',
      type: { name: 'inline-radio' },
      description: 'Icon position inside the link',
      options: ['before', 'after'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'after' },
        category: 'Icon',
      },
    },
  };
};

const prepareData = (data, args) => {
  data.link.label = args.label;
  data.link.negative = args.negative;
  data.link.no_visited = args.no_visited;
  data.link.icon_position = args.icon_position;
  if (args.icon_name && args.icon_name !== 'none') {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.transform = args.icon_transform;
    data.icon.size = 'xs';
    data.icon.path = 'icon.svg';
  }
  if (args.icon_name === 'none') {
    delete data.icon;
  }
  correctSvgPath(data);

  return data;
};

const prepareDataButtonLink = (data, args) => {
  const dataCustom = prepareData(data, args);
  if (dataCustom.icon) {
    data.icon.size = system === 'eu' ? 's' : 'xs';
  }

  return dataCustom;
};

export default {
  title: 'Components/Navigation/Link',
  decorators: [withNotes, withCode, withNegative],
};

export const Default = (args) => link(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.decorators = [withNotes, withCode, withParagraph, withNegative];
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Standalone = (args) => link(prepareData(dataStandalone, args));

Standalone.storyName = 'standalone';
Standalone.args = getArgs(dataStandalone);
Standalone.argTypes = getArgTypes();
Standalone.parameters = { notes: { markdown: notes, json: dataStandalone } };

export const Cta = (args) => link(prepareDataButtonLink(dataCta, args));

Cta.storyName = 'call to action';
Cta.args = getArgs(dataCta);
Cta.argTypes = getArgTypes();
Cta.parameters = { notes: { markdown: notes, json: dataCta } };

export const Primary = (args) => link(prepareDataButtonLink(dataPrimary, args));

Primary.storyName = 'primary';
Primary.args = getArgs(dataPrimary);
Primary.argTypes = getArgTypes();
Primary.parameters = { notes: { markdown: notes, json: dataPrimary } };

export const Secondary = (args) =>
  link(prepareDataButtonLink(dataSecondary, args));

Secondary.storyName = 'secondary';
Secondary.args = getArgs(dataSecondary);
Secondary.argTypes = getArgTypes();
Secondary.parameters = { notes: { markdown: notes, json: dataSecondary } };

export const Negative = (args) => link(prepareData(dataNegative, args));

Negative.storyName = 'negative';
Negative.decorators = [withNotes, withCode, withParagraph, withNegative];
Negative.args = getArgs(dataNegative);
Negative.argTypes = getArgTypes();
Negative.parameters = { notes: { markdown: notes, json: dataNegative } };
