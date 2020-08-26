import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';
import euDemoTitleContent from './demo/eu-data--title';
import euDemoMetaTitleContent from './demo/eu-data--meta-title';
import euDemoMetaTitleDescriptionContent from './demo/eu-data--meta-title-description';
import pageHeaderStandardised from './ecl-page-header-standardised.html.twig';
import notes from './README.md';

// Handle the EU demo.
const system = process.env.STORYBOOK_SYSTEM
  ? process.env.STORYBOOK_SYSTEM
  : false;

const dataTitle = system ? euDemoTitleContent : demoTitleContent;
const dataMetaTitle = system ? euDemoMetaTitleContent : demoMetaTitleContent;
const dataMetaTitleDescription = system
  ? euDemoMetaTitleDescriptionContent
  : demoMetaTitleDescriptionContent;

const preparePageHeaderStandardised = (data, desc, meta) => {
  data.title = text('title', data.title, tabLabels.required);
  if (meta) {
    data.meta = text('meta', data.meta, tabLabels.optional);
  }
  if (desc) {
    data.description = text(
      'description',
      data.description,
      tabLabels.optional
    );
  }
  data.breadcrumb.icon_file_path = optionsKnob(
    'breadcrumb.icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.breadcrumb.ellipsis_label = text(
    'breadcrumb.ellipsis_label',
    data.breadcrumb.ellipsis_label,
    tabLabels.required
  );
  data.breadcrumb.navigation_text = text(
    'breadcrumb.navigation_text',
    data.breadcrumb.navigation_text,
    tabLabels.required
  );
  data.breadcrumb.links.forEach((item, i) => {
    item.label = text(
      `data.breadcrumb.links[${i}].label`,
      item.label,
      tabLabels.required
    );
    item.path = text(
      `data.breadcrumb.links[${i}].path`,
      item.path,
      tabLabels.required
    );
  });

  getExtraKnobs(data);
  if (!system) {
    getComplianceKnob(data);
  }

  return data;
};

export default {
  title: 'Components/Page Headers/Page Header Standardised',
  decorators: [withNotes, withCode, withKnobs],
};

export const Title = () =>
  pageHeaderStandardised(preparePageHeaderStandardised(dataTitle));

Title.storyName = 'title';
Title.parameters = { notes: { markdown: notes, json: dataTitle } };

export const MetaTitle = () =>
  pageHeaderStandardised(
    preparePageHeaderStandardised(dataMetaTitle, false, true)
  );

MetaTitle.storyName = 'meta-title';
MetaTitle.parameters = { notes: { markdown: notes, json: dataMetaTitle } };

export const MetaTitleDescription = () =>
  pageHeaderStandardised(
    preparePageHeaderStandardised(dataMetaTitleDescription, true, true)
  );

MetaTitleDescription.storyName = 'meta-title-description';
MetaTitleDescription.parameters = {
  notes: { markdown: notes, json: dataMetaTitleDescription },
};
