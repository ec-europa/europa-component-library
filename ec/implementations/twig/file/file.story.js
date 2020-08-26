import { withKnobs, text, optionsKnob, array } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';
import dataThumbnail from './demo/data--thumbnail';

import file from './ecl-file.html.twig';
import notes from './README.md';

const prepareFile = (data, variant) => {
  data.title = text('title', data.title, tabLabels.required);
  data.language = text('language', data.language, tabLabels.required);
  data.meta = text('meta', data.meta, tabLabels.required);
  if (variant) {
    data.description = text(
      'description',
      data.description,
      tabLabels.optional
    );
    data.image.src = text('image.src', data.image.src, tabLabels.optional);
    data.image.alt = text('image.alt', data.image.alt, tabLabels.optional);
    data.detail_meta = array(
      'detail_meta (array)',
      data.detail_meta,
      '|',
      tabLabels.optional
    );
  }
  data.icon.path = optionsKnob(
    'icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.download.link.label = text(
    'download.link.label',
    data.download.link.label,
    tabLabels.required
  );
  data.download.icon.path = optionsKnob(
    'download.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );

  if (data.translation) {
    data.translation.description = text(
      'translation.description',
      data.translation.description,
      tabLabels.optional
    );
    data.translation.toggle.label = text(
      'translation.toggle.label',
      data.translation.toggle.label,
      tabLabels.required
    );
    data.translation.toggle.icon.path = optionsKnob(
      'translation.toggle.icon.path',
      { current: defaultSprite, 'no path': '' },
      defaultSprite,
      { display: 'inline-radio' },
      tabLabels.required
    );

    data.translation.items.forEach((item, i) => {
      data.translation.items[i].title = text(
        `data.translation.items[${i}].title`,
        data.translation.items[i].title,
        tabLabels.required
      );
      data.translation.items[i].meta = text(
        `data.translation.items[${i}].meta`,
        data.translation.items[i].meta,
        tabLabels.required
      );
      data.translation.items[i].lang = text(
        `data.translation.items[${i}].lang`,
        data.translation.items[i].lang,
        tabLabels.required
      );
      data.translation.items[i].download.link.label = text(
        `data.translation.items[${i}].download.link.label`,
        data.translation.items[i].download.link.label,
        tabLabels.required
      );
      data.translation.items[i].download.link.path = text(
        `data.translation.items[${i}].download.link.path`,
        data.translation.items[i].download.link.path,
        tabLabels.required
      );
      data.translation.items[i].download.icon.path = optionsKnob(
        `data.translation.items[${i}].download.icon.path`,
        { current: defaultSprite, 'no path': '' },
        defaultSprite,
        { display: 'inline-radio' },
        tabLabels.required
      );
    });
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/File',
  decorators: [withNotes, withCode, withKnobs],
};

export const WithoutTranslation = () =>
  file(prepareFile(dataWithoutTranslation));

WithoutTranslation.storyName = 'without translation';
WithoutTranslation.parameters = {
  notes: { markdown: notes, json: dataWithoutTranslation },
};

export const WithTranslation = () => file(prepareFile(dataWithTranslation));

WithTranslation.storyName = 'with translation';
WithTranslation.parameters = {
  notes: { markdown: notes, json: dataWithTranslation },
};

export const Thumbnail = () => file(prepareFile(dataThumbnail, 'thumbnail'));

Thumbnail.storyName = 'thumbnail';
Thumbnail.parameters = { notes: { markdown: notes, json: dataThumbnail } };
