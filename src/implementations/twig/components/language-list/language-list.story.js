import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import logoPath from '@ecl/resources-ec-logo/logo--mute.svg';
import dataSplash from '@ecl/specs-component-language-list/demo/data--splash';
import dataOverlay from '@ecl/specs-component-language-list/demo/data--overlay';
import languageList from './language-list.html.twig';
import notes from './README.md';

const prepareData = (data) => {
  correctSvgPath(data);
  if (data.logo) {
    data.logo.path = logoPath;
  }

  return data;
};

export default {
  title: 'Components/Language list',
  decorators: [withCode, withNotes],
  parameters: {
    knobs: { disable: true },
    controls: { disable: true },
  },
};

export const Splash = () => languageList(prepareData(dataSplash));

Splash.storyName = 'splash';
Splash.parameters = { notes: { markdown: notes, json: dataSplash } };

export const Overlay = () => languageList(prepareData(dataOverlay));

Overlay.storyName = 'overlay';
Overlay.parameters = { notes: { markdown: notes, json: dataOverlay } };
