import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath, getFormControls } from '@ecl/story-utils';

import dataDefaultSingle from '@ecl/specs-component-select/demo/data--single';
import dataDefaultMultiple from '@ecl/specs-component-select/demo/data--multiple';

import selectBox from './select.html.twig';
import notes from './README.md';

const dataSingle = { ...dataDefaultSingle, width: 'm' };
const dataMultiple = { ...dataDefaultMultiple, width: 'm' };

const getArgTypes = (data) => getFormControls(data, 'element');

const prepareData = (data, args) => {
  correctSvgPath(data);
  return Object.assign(data, args);
};

export default {
  title: 'Components/Forms/Select',
  decorators: [withCode, withNotes],
  parameters: {
    knobs: { disable: true },
  },
};

export const Single = (args) => selectBox(prepareData(dataSingle, args));

Single.storyName = 'default';
Single.argTypes = getArgTypes(dataSingle);
Single.parameters = { notes: { markdown: notes, json: dataSingle } };

export const Multiple = (args) => selectBox(prepareData(dataMultiple, args));

Multiple.storyName = 'Multiple';
Multiple.argTypes = getArgTypes(dataMultiple);
Multiple.parameters = { notes: { markdown: notes, json: dataMultiple } };
