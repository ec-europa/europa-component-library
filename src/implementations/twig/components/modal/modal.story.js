import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-modal/demo/data';
import modal from './modal.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  header: data.header,
  body: data.body,
  footer: data.footer,
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
  body: {
    name: 'body',
    type: { name: 'string', required: true },
    description: 'Body of the modal',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  footer: {
    name: 'footer',
    type: { name: 'string', required: true },
    description: 'Footer of the modal',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  const dataClone = structuredClone(data);

  dataClone.header = args.header;
  dataClone.body = args.body;
  dataClone.footer = args.footer;

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
