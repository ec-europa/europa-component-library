import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath, getFormControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataSingleEC from '@ecl/specs-component-select/demo/data-single--ec';
import dataMultipleEC from '@ecl/specs-component-select/demo/data-multiple--ec';
import dataSingleEU from '@ecl/specs-component-select/demo/data-single--eu';
import dataMultipleEU from '@ecl/specs-component-select/demo/data-multiple--eu';

import selectBox from './select.html.twig';
import notes from './README.md';

const system = getSystem();
const dataSingle = system === 'eu' ? dataSingleEU : dataSingleEC;
const dataMultiple = system === 'eu' ? dataMultipleEU : dataMultipleEC;

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

Multiple.storyName = 'multiple';
Multiple.argTypes = getArgTypes(dataMultiple);
Multiple.parameters = { notes: { markdown: notes, json: dataMultiple } };
