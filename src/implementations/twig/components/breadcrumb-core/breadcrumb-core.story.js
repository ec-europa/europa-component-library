import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataSimpleEU from '@ecl/specs-component-breadcrumb/demo/data-simple--eu';
import dataSimpleEC from '@ecl/specs-component-breadcrumb/demo/data-simple--ec';
import dataLongEU from '@ecl/specs-component-breadcrumb/demo/data--eu';
import dataLongEC from '@ecl/specs-component-breadcrumb/demo/data--ec';

import breadcrumb from './breadcrumb-core.html.twig';
import notes from './README.md';

const system = getSystem();
const dataSimple = system === 'eu' ? { ...dataSimpleEU } : { ...dataSimpleEC };
const dataLong = system === 'eu' ? { ...dataLongEU } : { ...dataLongEC };

const getArgs = (data) => {
  const args = {};
  data.links.forEach((item, i) => {
    args[`item${i + 1}`] = item.label;
  });

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};
  data.links.forEach((item, i) => {
    argTypes[`item${i + 1}`] = {
      name: `Item ${i + 1}`,
      type: { name: 'string' },
      description: `Label of breadcrumb item ${i + 1}`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    };
  });

  return argTypes;
};

const prepareData = (data, args) => {
  data.links.forEach((item, i) => {
    item.label = args[`item${i + 1}`];
    item.negative = system === 'ec';
  });

  return correctSvgPath(data);
};

export default {
  title: 'Components/Navigation/Breadcrumbs/Breadcrumb Core',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Simple = (args) => breadcrumb(prepareData(dataSimple, args));

Simple.args = getArgs(dataSimple);
Simple.argTypes = getArgTypes(dataSimple);
Simple.storyName = 'simple';
Simple.parameters = {
  notes: { markdown: notes, json: dataSimple },
};

export const Long = (args) => breadcrumb(prepareData(dataLong, args));

Long.args = getArgs(dataLong);
Long.argTypes = getArgTypes(dataLong);
Long.storyName = 'long';
Long.parameters = {
  notes: { markdown: notes, json: dataLong },
};
