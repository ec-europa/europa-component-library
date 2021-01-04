import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoTitleContent from '@ecl/specs-component-page-header-standardised/demo/data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header-standardised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header-standardised/demo/data--meta-title-description';
import dataBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data';
import pageHeaderStandardised from './page-header-standardised.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {};
  argTypes.title = {
    name: 'title',
    type: { name: 'string', required: true },
    defaultValue: data.title,
    description: 'The page title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  if (data.description) {
    argTypes.description = {
      name: 'description',
      type: 'string',
      defaultValue: data.description,
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
      name: 'meta',
      type: 'string',
      defaultValue: data.meta,
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
  data.breadcrumb = dataBreadcrumbLong;
  correctSvgPath(data);
  return Object.assign(data, args);
};

export default {
  title: 'Components/Page Headers/Standardised',
  decorators: [withNotes, withCode],
};

export const Title = () =>
  pageHeaderStandardised(prepareData(demoTitleContent));

Title.storyName = 'title';
Title.argTypes = getArgTypes(demoTitleContent);
Title.parameters = { notes: { markdown: notes, json: demoTitleContent } };

export const MetaTitle = () =>
  pageHeaderStandardised(prepareData(demoMetaTitleContent, false, true));

MetaTitle.storyName = 'meta-title';
MetaTitle.argTypes = getArgTypes(demoMetaTitleContent);
MetaTitle.parameters = {
  notes: { markdown: notes, json: demoMetaTitleContent },
};

export const MetaTitleDescription = () =>
  pageHeaderStandardised(
    prepareData(demoMetaTitleDescriptionContent, true, true)
  );

MetaTitleDescription.storyName = 'meta-title-description';
MetaTitleDescription.argTypes = getArgTypes(demoMetaTitleDescriptionContent);
MetaTitleDescription.parameters = {
  notes: { markdown: notes, json: demoMetaTitleDescriptionContent },
};
