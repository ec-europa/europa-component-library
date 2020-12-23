import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath, getFormControls } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-radio/demo/data--default';
import dataBinary from '@ecl/specs-component-radio/demo/data--binary';

import radioGroup from './radio-group.html.twig';
import notes from './README.md';

const getArgTypes = (data) => getFormControls(data, 'group');

const prepareData = (data, args) => {
  correctSvgPath(data);
  return Object.assign(data, args);
};

export default {
  title: 'Components/Forms/Radio',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => radioGroup(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Binary = (args) => radioGroup(prepareData(dataBinary, args));

Binary.storyName = 'binary';
Binary.argTypes = getArgTypes(dataBinary);
Binary.parameters = { notes: { markdown: notes, json: dataBinary } };
