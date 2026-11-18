import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import demoData from './demo/data';
import siteHeaderCompact from './site-header-compact.html.twig';
import notes from './README.md?raw';

export default {
  title: 'Specific/Site header compact',
  decorators: [withNotes, withCode],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => siteHeaderCompact(demoData);
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
