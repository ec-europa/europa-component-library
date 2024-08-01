import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-gallery/demo/data';
import gallery from './gallery.html.twig';
import notes from './README.md';

const getArgs = () => ({
  grid: false,
  column: 3,
  ratio: '3-2',
  expandable: true,
  full_width: false,
  visible_items: 8,
  disable_hover: false,
  disable_overlay: false,
});

const getArgTypes = () => ({
  grid: {
    control: { type: 'boolean' },
    description: 'Grid display',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  column: {
    name: 'columns',
    control: {
      type: 'range',
      step: 1,
      min: 2,
      max: 5,
    },
    description: 'Number of columns, for grid display',
    table: {
      type: { summary: 'integer' },
      defaultValue: { summary: '3' },
    },
    if: { arg: 'grid' },
  },
  ratio: {
    name: 'Image ratio',
    type: { name: 'select' },
    description: 'Image ratio, for grid display',
    options: ['3-1', '3-2'],
    mapping: {
      '3-1': '3-1',
      '3-2': '3-2',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    if: { arg: 'grid' },
  },
  expandable: {
    control: { type: 'boolean' },
    description: 'expandable gallery',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
  },
  full_width: {
    name: 'full width',
    control: { type: 'boolean' },
    description: 'full width gallery (desktop & tablet)',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  disable_hover: {
    name: 'without title',
    control: { type: 'boolean' },
    description: 'disable display of title on mouse hover',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  disable_overlay: {
    name: 'without overlay',
    control: { type: 'boolean' },
    description: 'make the gallery as just a collection of images',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  visible_items: {
    name: 'limit the number of visible items',
    control: {
      type: 'range',
      step: 1,
      min: 1,
      max: 11,
    },
    description: 'Only relevant when the gallery is set to be expandable',
    table: {
      type: { summary: 'integer' },
      defaultValue: { summary: '8' },
    },
    if: { arg: 'expandable' },
  },
});

export default {
  title: 'Components/Gallery',
  decorators: [withNotes, withCode],
  parameters: {
    layout: 'fullscreen',
  },
};

const prepareData = (data, args) => Object.assign(correctPaths(data), args);

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedGallery = `<div class="ecl-container">${await gallery(
    prepareData(dataDefault, args),
  )}</div>`;
  return renderedGallery;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.args = getArgs();
Default.argTypes = getArgTypes();
