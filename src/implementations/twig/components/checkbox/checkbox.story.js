import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath, getFormControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataEc from '@ecl/specs-component-checkbox/demo/data--ec';
import dataEu from '@ecl/specs-component-checkbox/demo/data--eu';

import checkboxGroup from './checkbox-group.html.twig';
import notes from './README.md';

const system = getSystem();

let dataDefault = { ...dataEc };
let dataInvalid = { ...dataDefault, invalid: true };
let dataOptional = { ...dataDefault, required: false };
let dataSingle = { ...dataDefault, items: [dataEc.items[0]] };

if (system === 'eu') {
  dataDefault = { ...dataDefault, invalid_icon: dataEu.invalid_icon };
  dataInvalid = { ...dataInvalid, invalid_icon: dataEu.invalid_icon };
  dataOptional = { ...dataOptional, invalid_icon: dataEu.invalid_icon };
  dataSingle = { ...dataSingle, invalid_icon: dataEu.invalid_icon };
}

const getArgTypes = (data) => getFormControls(data, 'group');

const prepareData = (data, args) => {
  correctSvgPath(data);
  return Object.assign(data, args);
};

export default {
  title: 'Components/Forms/Checkbox',
  decorators: [withCode, withNotes],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => checkboxGroup(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Invalid = (args) => checkboxGroup(prepareData(dataInvalid, args));

Invalid.storyName = 'invalid';
Invalid.argTypes = getArgTypes(dataInvalid);
Invalid.parameters = { notes: { markdown: notes, json: dataInvalid } };

export const Optional = (args) =>
  checkboxGroup(prepareData(dataOptional, args));

Optional.storyName = 'optional';
Optional.argTypes = getArgTypes(dataOptional);
Optional.parameters = { notes: { markdown: notes, json: dataOptional } };

export const Single = (args) => checkboxGroup(prepareData(dataSingle, args));

Single.storyName = 'single';
Single.argTypes = getArgTypes(dataSingle);
Single.parameters = { notes: { markdown: notes, json: dataSingle } };
