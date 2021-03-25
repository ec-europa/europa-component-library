import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoBackgroundImage from '@ecl/specs-component-page-header-core/demo/data--background-image';
import demoTitleContent from '@ecl/specs-component-page-header-core/demo/data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header-core/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header-core/demo/data--meta-title-description';
import dataBreadcrumbLongEC from '@ecl/specs-component-breadcrumb/demo/data--ec';
import dataBreadcrumbLongEU from '@ecl/specs-component-breadcrumb/demo/data--eu';

import pageHeaderCore from './page-header-core.html.twig';
import notes from './README.md';

const system = getSystem();

const getArgTypes = (data) => {
  const argTypes = {};
  argTypes.title = {
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
  if (data.background_image_url) {
    argTypes.background_image_url = {
      name: 'background image',
      type: 'string',
      defaultValue: data.background_image_url,
      description: 'The background image url',
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
  data.breadcrumb =
    system === 'eu' ? dataBreadcrumbLongEU : dataBreadcrumbLongEC;

  return Object.assign(correctSvgPath(data), args);
};

export default {
  title: 'Components/Page Headers/Core',
  decorators: [withNotes, withCode],
};

export const Title = (args) =>
  pageHeaderCore(prepareData(demoTitleContent, args));

Title.storyName = 'title';
Title.argTypes = getArgTypes(demoTitleContent);
Title.parameters = { notes: { markdown: notes, json: demoTitleContent } };

export const MetaTitle = (args) =>
  pageHeaderCore(prepareData(demoMetaTitleContent, args));

MetaTitle.storyName = 'meta-title';
MetaTitle.argTypes = getArgTypes(demoMetaTitleContent);
MetaTitle.parameters = {
  notes: { markdown: notes, json: demoMetaTitleContent },
};

export const MetaTitleDescription = (args) =>
  pageHeaderCore(prepareData(demoMetaTitleDescriptionContent, args));

MetaTitleDescription.storyName = 'meta-title-description';
MetaTitleDescription.argTypes = getArgTypes(demoMetaTitleDescriptionContent);
MetaTitleDescription.parameters = {
  notes: { markdown: notes, json: demoMetaTitleDescriptionContent },
};

export const BackgroundImage = (args) =>
  pageHeaderCore(prepareData(demoBackgroundImage, args));

BackgroundImage.storyName = 'background-image';
BackgroundImage.argTypes = getArgTypes(demoBackgroundImage);
BackgroundImage.parameters = {
  notes: { markdown: notes, json: demoBackgroundImage },
  creevey: { delay: 3000 },
};
