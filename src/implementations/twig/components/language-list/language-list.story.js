import {
  withKnobs,
  text,
  select,
  boolean,
  optionsKnob,
} from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import logoPath from '@ecl/resources-ec-logo/logo--mute.svg';
import defaultSpriteEc from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import defaultSpriteEu from '@ecl/resources-eu-icons/dist/sprites/icons.svg';
import dataSplash from '@ecl/specs-component-language-list/demo/data--splash';
import dataOverlay from '@ecl/specs-component-language-list/demo/data--overlay';
import languageList from './language-list.html.twig';
import notes from './README.md';

const system = getSystem();
const defaultSprite = system === 'eu' ? defaultSpriteEu : defaultSpriteEc;

const prepareLanguageList = (data) => {
  const logoImg = logoPath;
  data.icon_path = optionsKnob(
    'icon_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  if (data.logo) {
    data.logo.path = optionsKnob(
      'logo.path',
      { current: logoImg, 'no path': '' },
      logoImg,
      { display: 'inline-radio' },
      tabLabels.required
    );
    if (data.logo.path) {
      data.logo.alt = select(
        'logo.alt',
        [data.logo.alt],
        data.logo.alt,
        tabLabels.required
      );
    }
  }
  if (data.overlay) {
    data.overlay = select(
      'overlay',
      [data.overlay],
      data.overlay,
      tabLabels.required
    );
  }
  if (data.close_label) {
    data.close_label = text(
      'close_label',
      data.close_label,
      tabLabels.required
    );
  }
  if (data.title) {
    data.title = text('title', data.title, tabLabels.required);
  }
  data.eu_category = text('eu_category', data.eu_category, tabLabels.optional);
  data.non_eu_category = text(
    'non_eu_category',
    data.non_eu_category,
    tabLabels.optional
  );
  data.items.forEach((item, i) => {
    if (item.label && item.path) {
      item.label = select(
        `items[${i}].label`,
        ['none', item.label],
        item.label,
        tabLabels.required
      );
      item.path = text(`items[${i}].path`, item.path, tabLabels.required);
      item.lang = select(
        `items[${i}].lang`,
        [item.lang],
        item.lang,
        tabLabels.required
      );
    }
    if (item.active) {
      item.active = boolean(
        `items[${i}].active`,
        item.active,
        tabLabels.required
      );
    }
    if (item.label === 'none') {
      item.label = '';
      item.path = '';
    }
  });

  data.non_eu_items.forEach((item, i) => {
    if (item.label && item.path) {
      item.label = select(
        `non_eu_items[${i}].label`,
        ['none', item.label],
        item.label,
        tabLabels.optional
      );
      item.path = text(`items[${i}].path`, item.path, tabLabels.optional);
      item.lang = select(
        `non_eu_items[${i}].lang`,
        [item.lang],
        item.lang,
        tabLabels.optional
      );
    }
    if (item.active) {
      item.active = boolean(
        `non_eu_items[${i}].active`,
        item.active,
        tabLabels.optional
      );
    }
    if (item.label === 'none') {
      item.label = '';
      item.path = '';
    }
  });

  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Language list',
  decorators: [withKnobs, withCode, withNotes],
};

export const Splash = () => languageList(prepareLanguageList(dataSplash));

Splash.storyName = 'splash';
Splash.parameters = { notes: { markdown: notes, json: dataSplash } };

export const Overlay = () => languageList(prepareLanguageList(dataOverlay));

Overlay.storyName = 'overlay';
Overlay.parameters = { notes: { markdown: notes, json: dataOverlay } };
