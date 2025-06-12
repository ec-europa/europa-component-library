import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls } from '@ecl/story-utils';

import dataDefault from './demo/data';
import highlight from './highlight.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  content: data.content,
});

const getArgTypes = () => ({
  ...getColorModeControls(),
  content: {
    name: 'content',
    type: { name: 'string', required: true },
    description: 'The highlighted content',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

export default {
  title: 'Components/Highlight',
  decorators: [withNotes, withCode],
};

const prepareData = (data, args) => Object.assign(data, args);

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedHighlight = `<p class="ecl-u-type-paragraph">
  ${await highlight(prepareData(dataDefault, args))}
  </p>`;
  return renderedHighlight;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes } };
