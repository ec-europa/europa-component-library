import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataDefaultEU from '@ecl/specs-component-breadcrumb/demo/data--eu';
import dataDefaultEC from '@ecl/specs-component-breadcrumb/demo/data--ec';

import breadcrumb from './breadcrumb.html.twig';
import notes from './README.md';

const system = getSystem();
const dataDefault =
  system === 'eu' ? { ...dataDefaultEU } : { ...dataDefaultEC };

const dataCore =
  system === 'eu'
    ? { ...dataDefault }
    : { ...dataDefault, variant: 'negative' };

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
  correctPaths(data);
  data.links.forEach((item, i) => {
    item.label = args[`item${i + 1}`];
    item.negative = false;
  });

  return data;
};

export default {
  title: 'Components/Navigation/Breadcrumb',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Core = (_, { loaded: { component } }) => component;

Core.render = async (args) => {
  const renderedBreadcrumbCore = await breadcrumb(prepareData(dataCore, args));
  return renderedBreadcrumbCore;
};
Core.storyName = 'core';
Core.args = getArgs(dataCore);
Core.argTypes = getArgTypes(dataCore);
Core.parameters = {
  notes: { markdown: notes, json: dataCore },
};

export const Standardised = (_, { loaded: { component } }) => component;

Standardised.render = async (args) => {
  const renderedBreadcrumbStandardised = await breadcrumb(
    prepareData(dataDefault, args)
  );
  return renderedBreadcrumbStandardised;
};
Standardised.storyName = 'standardised';
Standardised.args = getArgs(dataDefault);
Standardised.argTypes = getArgTypes(dataDefault);
Standardised.parameters = {
  notes: { markdown: notes, json: dataDefault },
};

export const Harmonised = (_, { loaded: { component } }) => component;

Harmonised.render = async (args) => {
  const renderedBreadcrumbHarmonised = await breadcrumb(
    prepareData(dataDefault, args)
  );
  return renderedBreadcrumbHarmonised;
};
Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs(dataDefault);
Harmonised.argTypes = getArgTypes(dataDefault);
Harmonised.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
