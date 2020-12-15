import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

// Import data for demos
import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/resources-ec-icons/dist/lists/ui.json';
import dataDefault from '@ecl/specs-component-link/demo/data--default';
import dataCta from '@ecl/specs-component-link/demo/data--cta';
import dataStandalone from '@ecl/specs-component-link/demo/data--standalone';

import link from './link.html.twig';
import notes from './README.md';

const storyAsString = (story) =>
  `<p class="ecl-u-type-paragraph">The European Commission is the executive of ${story} and promotes its general interest.</p>`;
const storyAsNode = (story) => {
  const wrapper = document.createElement('p');
  wrapper.className = 'ecl-u-type-paragraph';
  wrapper.appendChild(story);
  return wrapper;
};

const withParagraph = (story) => {
  const demo = story();
  return typeof demo === 'string' ? storyAsString(demo) : storyAsNode(demo);
};

const iconsList = uiIcons.reduce((a, b) => {
  a[b] = b;
  return a;
}, {});

const getArgTypes = (data) => {
  return {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: data.link.label,
      description: 'The main label of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
    icon_position: {
      name: 'icon position',
      type: { name: 'select', required: false },
      description: 'Position of the icon (required to show the icon)',
      table: {
        type: { summary: 'string' },
        category: 'Icon',
      },
      control: {
        type: 'select',
        options: ['before', 'after'],
      },
    },
    icon_name: {
      name: 'icon (sample)',
      type: { name: 'select', required: false },
      description: 'Name of the icon',
      table: {
        type: { summary: 'string' },
        category: 'Icon',
      },
      control: {
        type: 'select',
        options: iconsList,
      },
    },
  };
};

const prepareData = (data, args) => {
  data.link.label = args.label;
  data.link.icon_position = args.icon_position;
  if (args.icon_name) {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.type = 'ui';
    data.icon.size = 'fluid';
    data.icon.path = defaultSprite;
  }

  return data;
};

export default {
  title: 'Components/Navigation/Link',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: {
      disable: true,
    },
  },
};

export const Default = (args) => link(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.decorators = [withNotes, withCode, withParagraph];
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: {
    markdown: notes,
    json: dataDefault,
  },
};

export const Standalone = (args) => link(prepareData(dataStandalone, args));

Standalone.storyName = 'standalone';
Standalone.argTypes = getArgTypes(dataStandalone);
Standalone.parameters = {
  notes: {
    markdown: notes,
    json: dataStandalone,
  },
};

export const Cta = (args) => link(prepareData(dataCta, args));

Cta.storyName = 'cta';
Cta.argTypes = getArgTypes(dataCta);
Cta.parameters = {
  notes: {
    markdown: notes,
    json: dataCta,
  },
};
