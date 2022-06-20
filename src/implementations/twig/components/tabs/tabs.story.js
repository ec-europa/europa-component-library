import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from '@ecl/specs-component-tabs/demo/data';
import Tabs from './tabs.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Navigation/Tabs',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
  },
};

export const Default = () => Tabs(correctPaths(specs));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
