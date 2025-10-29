import { correctPaths } from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import data from './demo/data';
import flow from './vertical-flow-demo.html.twig';

const prepareData = (data, args) => {
  data.columns = args.columns;

  correctPaths(data);

  return data;
};

export default {
  title: 'Layout/Vertical flow',
  decorators: [withNotes, withCode],
  parameters: {
    EclNotes: { disable: true },
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedList = `<div class="ecl-container">${await flow(prepareData(data, args))}</div>`;
  return renderedList;
};
Default.storyName = 'Items flow in a listing';
Default.args = {
  columns: 2,
};
Default.argTypes = {
  columns: {
    name: 'number of columns',
    control: { type: 'range', min: 2, max: 4, step: 1 },
    description: 'The number of column for the list (between 2 and 4)',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 2 },
    },
  },
};
