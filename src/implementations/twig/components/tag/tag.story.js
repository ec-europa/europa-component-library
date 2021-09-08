import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataLink from '@ecl/specs-component-tag/demo/data--link';
import dataRemovable from '@ecl/specs-component-tag/demo/data--removable';
import dataDisplay from '@ecl/specs-component-tag/demo/data--display';

import tag from './tag.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  return {
    label: data.tag.label,
  };
};

const getArgTypes = () => {
  return {
    label: {
      name: 'label',
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
  decorators: [withNotes, withCode],
};

export const Display = (args) => tag(prepareData(dataDisplay, args));

Display.storyName = 'display tag';
Display.args = getArgs(dataDisplay);
Display.argTypes = getArgTypes();
Display.parameters = { notes: { markdown: notes, json: dataDisplay } };

export const Link = (args) => tag(prepareData(dataLink, args));

Link.storyName = 'link tag';
Link.args = getArgs(dataLink);
Link.argTypes = getArgTypes();
Link.parameters = { notes: { markdown: notes, json: dataLink } };

export const Removable = (args) => tag(prepareData(dataRemovable, args));

Removable.storyName = 'removable tag';
Removable.args = getArgs(dataRemovable);
Removable.argTypes = getArgTypes();
Removable.parameters = { notes: { markdown: notes, json: dataRemovable } };
