import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import demoContent from './demo/data';

import pageInfo from './page-information.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  content: data.content,
});

const getArgTypes = () => ({
  content: {
    name: 'page information content',
    type: { name: 'string', required: true },
    description: 'Page information',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: 'Components/Page information',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedDefault = await pageInfo(prepareData(demoContent, args));
  return renderedDefault;
};
Default.storyName = 'default';
Default.args = getArgs(demoContent);
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: { markdown: notes, json: demoContent },
};
