import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getIconControls } from '@ecl/story-utils';

import dataAll from '@ecl/specs-component-icon/demo/data';
import iconsAll from '@ecl/resources-icons/dist/lists/all.json';

import icon from './icon.html.twig';
import notes from './README.md';

const iconMapping = iconsAll.reduce((mapping, iconName) => {
  mapping[iconName] = iconName;
  return mapping;
}, {});

const getArgs = (data) => ({
  name: data.icon.name,
  size: 'm',
  color: 'default',
  transform: 'none',
  title: '',
});

const getArgTypes = (data, icons) => getIconControls(data, icons, iconMapping);

const prepareData = (data, args) => {
  if (args.color === 'default') {
    args.color = '';
  }
  if (args.transformation === 'none') {
    args.transformation = '';
  }
  if (args.title) {
    data.as_image = true;
    data.extra_accessibility = {
      title: args.title,
    };
  } else {
    data.as_image = false;
    data.extra_accessibility = {};
  }
  correctPaths(data);
  data.icon.name = args.name;
  data.icon.size = args.size;
  data.icon.color = args.color;
  data.extra_classes = data.icon.color === 'inverted' ? 'ecl-u-bg-dark' : '';
  data.icon.transform = args.transform;
  return data;
};

export default {
  title: 'Components/Icon',
  decorators: [withNotes, withCode],
};

export const All = (_, { loaded: { component } }) => component;

All.render = async (args) => {
  const renderedIcon = await icon(prepareData(dataAll, args));
  return renderedIcon;
};
All.storyName = 'all icons';
All.args = getArgs(dataAll);
All.argTypes = getArgTypes(dataAll, iconsAll, iconMapping);
All.parameters = { notes: { markdown: notes, json: dataAll } };
