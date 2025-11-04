import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import Tabs from './tabs.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {};

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = { ...getColorModeControls() };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);

  return Object.assign(data, args);
};

export default {
  title: 'Components/Navigation/Tabs',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedTabs = await Tabs(prepareData(demoData, args));
  return renderedTabs;
};
Default.storyName = 'default';
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.parameters = { notes: { markdown: notes, json: demoData } };
