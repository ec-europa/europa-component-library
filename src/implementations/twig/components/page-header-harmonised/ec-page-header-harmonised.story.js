import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoTitleContent from '@ecl/specs-component-page-header-harmonised/demo//data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header-harmonised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header-harmonised/demo/data--meta-title-description';
import dataBreadcrumbLongEC from '@ecl/specs-component-breadcrumb/demo/data--ec';

import pageHeaderHarmonised from './page-header-harmonised.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    title: data.title,
  };
  if (data.description) {
    args.description = data.description;
  }
  if (data.meta) {
    args.meta = data.meta;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};
  argTypes.title = {
    type: { name: 'string', required: true },
    description: 'The page title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  if (data.description) {
    argTypes.description = {
      type: 'string',
      description: 'The page introduction',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.meta) {
    argTypes.meta = {
      type: 'string',
      description: 'The page metadata',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  data.breadcrumb = dataBreadcrumbLongEC;
  data.breadcrumb.links.forEach((item) => {
    item.negative = false;
  });

  return Object.assign(correctSvgPath(data), args);
};

export default {
  title: 'Components/Page Headers/Harmonised',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Title = (args) =>
  pageHeaderHarmonised(prepareData(demoTitleContent, args));

Title.storyName = 'title';
Title.args = getArgs(demoTitleContent);
Title.argTypes = getArgTypes(demoTitleContent);
Title.parameters = { notes: { markdown: notes, json: demoTitleContent } };

export const MetaTitle = (args) =>
  pageHeaderHarmonised(prepareData(demoMetaTitleContent, args));

MetaTitle.storyName = 'meta-title';
MetaTitle.args = getArgs(demoMetaTitleContent);
MetaTitle.argTypes = getArgTypes(demoMetaTitleContent);
MetaTitle.parameters = {
  notes: { markdown: notes, json: demoMetaTitleContent },
};

export const MetaTitleDescription = (args) =>
  pageHeaderHarmonised(prepareData(demoMetaTitleDescriptionContent, args));

MetaTitleDescription.storyName = 'meta-title-description';
MetaTitleDescription.args = getArgs(demoMetaTitleDescriptionContent);
MetaTitleDescription.argTypes = getArgTypes(demoMetaTitleDescriptionContent);
MetaTitleDescription.parameters = {
  notes: { markdown: notes, json: demoMetaTitleDescriptionContent },
};
