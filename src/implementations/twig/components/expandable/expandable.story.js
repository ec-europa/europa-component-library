import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-expandable/demo/data';
import expandable from './expandable.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  label_collapsed: data.label_collapsed,
  label_expanded: data.label_expanded,
  content: data.content,
});

const getArgTypes = () => ({
  label_collapsed: {
    name: 'label of the button',
    type: { name: 'string', required: true },
    description: 'Used when the content is hidden',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Button',
    },
  },
  label_expanded: {
    name: 'label of the button',
    type: { name: 'string', required: true },
    description: 'Used when the content is visible',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Button',
    },
  },
  content: {
    type: { name: 'string', required: true },
    description: 'Hidden initially, can be revealed by clicking on the button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => Object.assign(correctPaths(data), args);

export default {
  title: 'Components/Expandables',
};

export const Default = (args) => expandable(prepareData(demoData, args));

Default.storyName = 'default';
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withCode, withNotes];
