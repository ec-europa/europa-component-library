import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-breadcrumb/demo/data--long';

import breadcrumb from './breadcrumb.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Navigation/Breadcrumb',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedBreadcrumb = await breadcrumb(correctPaths(dataDefault));
  return renderedBreadcrumb;
};

Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
