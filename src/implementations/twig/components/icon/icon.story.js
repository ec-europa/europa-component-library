import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath, getIconControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataAll from '@ecl/specs-component-icon/demo/data';
import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsAllEu from '@ecl/resources-eu-icons/dist/lists/all.json';

import icon from './icon.html.twig';
import notes from './README.md';

const system = getSystem();
const iconsAll = system === 'eu' ? iconsAllEu : iconsAllEc;

const getArgs = (data) => {
  return {
    name: data.icon.name,
    size: 'm',
    color: '',
    transform: '',
  };
};

const getArgTypes = (data, icons) => getIconControls(data, icons);

const prepareData = (data, args) => {
  correctSvgPath(data);
  data.icon.name = args.name;
  data.icon.size = args.size;
  data.icon.color = args.color;
  data.extra_classes = data.icon.color === 'inverted' ? 'ecl-u-bg-grey' : '';
  data.icon.transform = args.transform;
  return data;
};

export default {
  title: 'Components/Icon',
  decorators: [withNotes, withCode],
};

export const All = (args) => icon(prepareData(dataAll, args));

All.storyName = 'all icons';
All.args = getArgs(dataAll);
All.argTypes = getArgTypes(dataAll, iconsAll);
All.parameters = { notes: { markdown: notes, json: dataAll } };
