import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath, getFormControls } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-radio/demo/data--default';
import dataBinary from '@ecl/specs-component-radio/demo/data--binary';

import radioGroup from './radio-group.html.twig';
import notes from './README.md';

const dataInvalid = { ...dataDefault, invalid: true };
const dataOptional = { ...dataDefault, required: false };
const dataBinaryInvalid = { ...dataBinary, invalid: true };

const getArgTypes = (data) => getFormControls(data, 'group');

const prepareData = (data, args) => {
  correctSvgPath(data);
  return Object.assign(data, args);
};

export default {
  title: 'Components/Forms/Radio',
  decorators: [withCode, withNotes],
};

export const Default = (args) => radioGroup(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Invalid = (args) => radioGroup(prepareData(dataInvalid, args));

Invalid.storyName = 'invalid';
Invalid.argTypes = getArgTypes(dataInvalid);
Invalid.parameters = { notes: { markdown: notes, json: dataInvalid } };

export const Optional = (args) => radioGroup(prepareData(dataOptional, args));

Optional.storyName = 'optional';
Optional.argTypes = getArgTypes(dataOptional);
Optional.parameters = { notes: { markdown: notes, json: dataOptional } };

export const Binary = (args) => radioGroup(prepareData(dataBinary, args));

Binary.storyName = 'binary';
Binary.argTypes = getArgTypes(dataBinary);
Binary.parameters = { notes: { markdown: notes, json: dataBinary } };

export const BinaryInvalid = (args) =>
  radioGroup(prepareData(dataBinaryInvalid, args));

BinaryInvalid.storyName = 'binary invalid';
BinaryInvalid.argTypes = getArgTypes(dataBinaryInvalid);
BinaryInvalid.parameters = {
  notes: { markdown: notes, json: dataBinaryInvalid },
};
