import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataDefaultEU from '@ecl/specs-component-breadcrumb/demo/data--eu';
import dataDefaultEC from '@ecl/specs-component-breadcrumb/demo/data--ec';

import breadcrumb from './breadcrumb-harmonised.html.twig';
import notes from './README.md';

const system = getSystem();
const dataDefault =
  system === 'eu' ? { ...dataDefaultEU } : { ...dataDefaultEC };

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
  correctSvgPath(data);
  data.links.forEach((item, i) => {
    item.label = args[`item${i + 1}`];
    item.negative = false;
  });

  return data;
};

export default {
  title: 'Components/Navigation/Breadcrumbs/Breadcrumb Harmonised',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => breadcrumb(prepareData(dataDefault, args));

Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
