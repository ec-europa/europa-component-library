import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-modal/demo/data';
import modal from './modal.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  header: data.header,
  header_icon:
    data.header_icon && data.header_icon.icon
      ? data.header_icon.icon.name
      : 'none',
  body: data.body,
  footer: 2,
});

const getArgTypes = () => ({
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
  header_icon: {
    name: 'header icon',
    type: { name: 'select' },
    description: 'Icon in the header',
    options: ['none', 'information', 'success', 'warning', 'error'],
    table: {
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

  dataClone.header = args.header;
  dataClone.body = args.body;

  if (args.header_icon === 'none') {
    delete dataClone.header_icon;
  } else {
    const icon = {
      icon: {
        name: args.header_icon,
      },
    };
    dataClone.header_icon = { ...dataClone.header_icon, ...icon };
  }

  dataClone.buttons = dataClone.buttons.slice(0, args.footer);

  correctPaths(dataClone);

  return dataClone;
};

export default {
  title: 'Components/Modal',
  decorators: [withNotes, withCode],
};

export const Default = (args) => {
  const demo = `
    <button data-ecl-auto-init="Modal" aria-controls="modal-example">Modal toggle</button>
    ${modal(prepareData(dataDefault, args))}
  `;
  return demo;
};

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
