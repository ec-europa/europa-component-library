import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-modal/demo/data';
import modal from './modal.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  header: data.header,
  variant: '',
  size: 'l',
  body: data.body,
  footer: 2,
});

const getArgTypes = () => ({
  variant: {
    name: 'variant',
    type: { name: 'select' },
    description: 'Variant of the modal',
    options: {
      default: '',
      information: 'information',
      success: 'success',
      warning: 'warning',
      error: 'error',
    },
    mapping: {
      default: '',
      information: 'information',
      success: 'success',
      warning: 'warning',
      error: 'error',
    },
    table: {
      category: 'Display',
    },
  },
  size: {
    name: 'size',
    type: { name: 'select' },
    description: `The width of the modal`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'l' },
      category: 'Display',
    },
    options: ['s', 'm', 'l', 'full'],
    control: {
      labels: {
        s: 'small',
        m: 'medium',
        l: 'large',
        full: 'full container',
      },
    },
    mapping: {
      small: 's',
      medium: 'm',
      large: 'l',
      'full container': 'full',
    },
  },
  header: {
    name: 'header',
    type: { name: 'string', required: true },
    description: 'Header of the modal',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  body: {
    name: 'body',
    type: { name: 'string' },
    description: 'Body of the modal',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  footer: {
    name: 'footer buttons',
    control: { type: 'range', min: 0, max: 2, step: 1 },
    description: 'Button examples in the footer',
    table: {
      defaultValue: { summary: 2 },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  const dataClone = structuredClone(data);

  dataClone.variant = args.variant;
  dataClone.size = args.size;
  dataClone.header = args.header;
  dataClone.body = args.body;
  dataClone.sr_icon = args.variant;

  if (args.footer === 0) {
    delete dataClone.buttons;
  } else {
    dataClone.buttons = dataClone.buttons.slice(-args.footer);
  }

  correctPaths(dataClone);

  return dataClone;
};

export default {
  title: 'Components/Modal',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedModal = `
    <button class="ecl-button ecl-button--secondary" id="modal-toggle">Modal toggle</button>
      ${await modal(prepareData(dataDefault, args))}
   `;
  return renderedModal;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
