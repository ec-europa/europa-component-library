import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getLinkKnobs,
  getComplianceKnob,
} from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataSimple from '@ecl/specs-component-breadcrumb/demo/data--simple';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data';

import breadcrumb from './breadcrumb-standardised.html.twig';
import notes from './README.md';

const prepareBreadcrumbStandardised = (data) => {
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
  title: 'Components/Navigation/Breadcrumbs/Breadcrumb Standardised',
  decorators: [withNotes, withCode, withKnobs],
};

export const Simple = () =>
  breadcrumb(prepareBreadcrumbStandardised(dataSimple));

Simple.storyName = 'simple';
Simple.parameters = { notes: { markdown: notes, json: dataSimple } };

export const Long = () => breadcrumb(prepareBreadcrumbStandardised(dataLong));

Long.storName = 'long';
Long.parameters = { notes: { markdown: notes, json: dataLong } };
