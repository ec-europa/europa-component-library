import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getLinkKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataSimpleEu from './demo/eu-data--simple';
import dataLongEu from './demo/eu-data';

import breadcrumb from './ecl-breadcrumb.html.twig';
import notes from './README.md';

const prepareBreadcrumb = (data) => {
  data.icon_file_path = optionsKnob(
    'icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.navigation_text = text(
    'navigation_text',
    data.navigation_text,
    tabLabels.required
  );
  data.ellipsis_label = text(
    'ellipsis_label',
    data.ellipsis_label,
    tabLabels.required
  );

  getLinkKnobs(data);
  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Navigation/Breadcrumb',
  decorators: [withKnobs, withNotes, withCode],
};

export const Simple = () => {
  const simpleHtml = breadcrumb(prepareBreadcrumb(dataSimpleEu));
  const demoSimple = document.createDocumentFragment();
  const simpleHtmlElement = document.createElement('div');
  simpleHtmlElement.style.background = '#004494';
  simpleHtmlElement.setAttribute('demo_only', true);
  simpleHtmlElement.innerHTML = simpleHtml;
  demoSimple.appendChild(simpleHtmlElement);

  return demoSimple;
};

Simple.storyName = 'simple';
Simple.parameters = { notes: { markdown: notes, json: dataSimpleEu } };

export const Long = () => {
  const longHtml = breadcrumb(prepareBreadcrumb(dataLongEu));
  const demoLong = document.createDocumentFragment();
  const longHtmlElement = document.createElement('div');
  longHtmlElement.style.background = '#004494';
  longHtmlElement.setAttribute('demo_only', true);
  longHtmlElement.innerHTML = longHtml;
  demoLong.appendChild(longHtmlElement);

  return demoLong;
};

Long.storyName = 'long';
Long.parameters = { notes: { markdown: notes, json: dataLongEu } };
