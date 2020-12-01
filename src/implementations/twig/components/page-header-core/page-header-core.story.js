import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import demoBackgroundImage from '@ecl/specs-component-page-header-core/demo/data--background-image';
import demoTitleContent from '@ecl/specs-component-page-header-core/demo/data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header-core/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header-core/demo/data--meta-title-description';
import dataBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data';

import pageHeaderCore from './page-header-core.html.twig';
import notes from './README.md';

const preparePageHeaderCore = (data, desc, meta, img) => {
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
  if (img) {
    data.background_image = boolean(
      'background_image',
      data.background_image,
      tabLabels.required
    );
    data.background_image_url = text(
      'background_image_url',
      data.background_image_url,
      tabLabels.required
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
  title: 'Components/Page Headers/Core',
  decorators: [withNotes, withCode, withKnobs],
};

export const Title = () =>
  pageHeaderCore(preparePageHeaderCore(demoTitleContent));

Title.storyName = 'title';
Title.parameters = { notes: { markdown: notes, json: demoTitleContent } };

export const MetaTitle = () =>
  pageHeaderCore(preparePageHeaderCore(demoMetaTitleContent, false, true));

MetaTitle.storyName = 'meta-title';
MetaTitle.parameters = {
  notes: { markdown: notes, json: demoMetaTitleContent },
};

export const MetaTitleDescription = () =>
  pageHeaderCore(
    preparePageHeaderCore(demoMetaTitleDescriptionContent, true, true)
  );

MetaTitleDescription.storyName = 'meta-title-description';
MetaTitleDescription.parameters = {
  notes: { markdown: notes, json: demoMetaTitleDescriptionContent },
};

export const BackgroundImage = () =>
  pageHeaderCore(preparePageHeaderCore(demoBackgroundImage, true, true, true));

BackgroundImage.storyName = 'background-image';
BackgroundImage.parameters = {
  notes: { markdown: notes, json: demoBackgroundImage },
};
