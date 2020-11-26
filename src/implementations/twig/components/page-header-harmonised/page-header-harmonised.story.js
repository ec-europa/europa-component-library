import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import demoTitleContent from '@ecl/specs-component-page-header-harmonised/demo//data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header-harmonised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header-harmonised/demo/data--meta-title-description';
import dataBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data';
import pageHeaderHarmonised from './page-header-harmonised.html.twig';
import notes from './README.md';

const preparePageHeaderHarmonised = (data, desc, meta) => {
  data.breadcrumb = dataBreadcrumbLong;
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
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Page Headers/Harmonised',
  decorators: [withNotes, withCode, withKnobs],
};

export const Title = () =>
  pageHeaderHarmonised(preparePageHeaderHarmonised(demoTitleContent));

Title.storyName = 'title';
Title.parameters = { notes: { markdown: notes, json: demoTitleContent } };

export const MetaTitle = () =>
  pageHeaderHarmonised(
    preparePageHeaderHarmonised(demoMetaTitleContent, false, true)
  );

MetaTitle.storyName = 'meta-title';
MetaTitle.parameters = {
  notes: { markdown: notes, json: demoMetaTitleContent },
};

export const MetaTitleDescription = () =>
  pageHeaderHarmonised(
    preparePageHeaderHarmonised(demoMetaTitleDescriptionContent, true, true)
  );

MetaTitleDescription.storyName = 'meta-title-description';
MetaTitleDescription.parameters = {
  notes: { markdown: notes, json: demoMetaTitleDescriptionContent },
};
