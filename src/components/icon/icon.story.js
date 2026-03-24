import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getIconControls } from '@ecl/story-utils';

import iconsAll from '@ecl/resources-icons/list.json';
import dataAll from './demo/data';

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
  description: '',
});

const getArgTypes = (icons) => getIconControls(icons, iconMapping);

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  if (args.color === 'default') {
    args.color = '';
  }
  if (args.transformation === 'none') {
    args.transformation = '';
  }
  correctPaths(clone);
  clone.icon.title = args.title;
  clone.icon.name = args.name;
  clone.icon.size = args.size;
  clone.icon.color = args.color;
  clone.extra_classes =
    clone.icon.color === 'inverted'
      ? `ecl-u-bg-dark ecl-u-bg-grey ${clone.extra_classes}`
      : clone.extra_classes;
  clone.icon.transform = args.transform;
  clone.extra_accessibility = {
    ...clone.extra_accessibility,
    description: args.description,
  };

  return clone;
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
All.argTypes = getArgTypes(iconsAll, iconMapping);
All.parameters = { notes: { markdown: notes, json: dataAll } };
