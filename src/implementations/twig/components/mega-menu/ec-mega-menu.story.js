import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import data from '@ecl/specs-component-mega-menu/demo/data';
import megaMenu from './mega-menu.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Navigation/Mega menu',
  decorators: [withNotes, withCode],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedMenu = await megaMenu(correctPaths(data));
  return renderedMenu;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: data } };
