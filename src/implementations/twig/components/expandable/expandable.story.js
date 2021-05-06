import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-expandable/demo/data';
import expandable from './expandable.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    label_collapsed: {
      name: 'label of the button',
      type: { name: 'string', required: true },
      defaultValue: data.label_collapsed,
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
      defaultValue: data.label_expanded,
      description: 'Used when the content is visible',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Button',
      },
    },
    content: {
      type: { name: 'string', required: true },
      defaultValue: data.content,
      description:
        'Hidden initially, can be revealed by clicking on the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(correctSvgPath(data), args);
};

export default {
  title: 'Components/Expandables',
};

export const Default = (args) => expandable(prepareData(demoData, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(demoData);
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withCode, withNotes];
