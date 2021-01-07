import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataLink from '@ecl/specs-component-tag/demo/data--link';
import dataRemovable from '@ecl/specs-component-tag/demo/data--removable';
import dataDisplay from '@ecl/specs-component-tag/demo/data--display';

import tag from './tag.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    label: {
      name: 'label',
      defaultValue: data.tag.label,
      type: { name: 'string', required: true },
      description: 'The label of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  data.tag.label = args.label;
  correctSvgPath(data);

  return Object.assign(data, args);
};

export default {
  title: 'Components/Tag',
  decorators: [withCode, withNotes],
  knobs: { disable: true },
};

export const Display = (args) => tag(prepareData(dataDisplay, args));

Display.storyName = 'display tag';
Display.argTypes = getArgTypes(dataDisplay);
Display.parameters = { notes: { markdown: notes, json: dataDisplay } };

export const Link = (args) => tag(prepareData(dataLink, args));

Link.storyName = 'link tag';
Link.argTypes = getArgTypes(dataLink);
Link.parameters = { notes: { markdown: notes, json: dataLink } };

export const Removable = (args) => tag(prepareData(dataRemovable, args));

Removable.storyName = 'removable tag';
Removable.argTypes = getArgTypes(dataRemovable);
Removable.parameters = { notes: { markdown: notes, json: dataRemovable } };
