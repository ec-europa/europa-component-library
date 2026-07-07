import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import defaultData from './demo/data';
import BannerSearch from './banner-search.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  title: data.title,
  description: data.description,
  nb_suggestions: data.suggestion.items.length,
});

const getArgTypes = () => ({
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'Title of the search banner',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  description: {
    name: 'description',
    type: { name: 'string' },
    description: 'Description of the search banner',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  nb_suggestions: {
    name: 'number of suggestions',
    control: { type: 'range', min: 0, max: 6, step: 1 },
    description: 'Number of suggestion tags to display',
    table: {
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  clone.title = args.title;
  clone.description = args.description;

  if (args.nb_suggestions === 0) {
    delete clone.suggestion;
  } else {
    clone.suggestion.items = clone.suggestion.items.slice(
      0,
      args.nb_suggestions,
    );
  }

  return clone;
};

export default {
  title: 'Components/Banner search',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const rendered = await BannerSearch(prepareData(defaultData, args));
  return rendered;
};
Default.storyName = 'default';
Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: defaultData } };
Default.decorators = [withCode, withNotes];
