import { withNotes } from '@ecl/storybook-addon-notes';
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import withCode from '@ecl/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getLinkKnobs,
  getComplianceKnob,
} from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataSimple from '@ecl/specs-component-breadcrumb/demo/data--simple';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data';
import dataSimpleEu from '@ecl/specs-component-breadcrumb/demo/data--simple';
import dataLongEu from '@ecl/specs-component-breadcrumb/demo/data';

import breadcrumb from './breadcrumb-core.html.twig';
import notes from './README.md';

// Handle the EU demo.
const system = process.env.STORYBOOK_SYSTEM
  ? process.env.STORYBOOK_SYSTEM
  : false;

const simpleData = system ? dataSimpleEu : dataSimple;
const longData = system ? dataLongEu : dataLong;

const prepareBreadcrumbCore = (data) => {
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
  title: 'Components/Navigation/Breadcrumbs/Breadcrumb Core',
  decorators: [withNotes, withCode, withKnobs],
};

export const Simple = () => breadcrumb(prepareBreadcrumbCore(simpleData));

Simple.storyName = 'simple';
Simple.parameters = { notes: { markdown: notes, json: simpleData } };

export const Long = () => breadcrumb(prepareBreadcrumbCore(longData));

Long.storyName = 'long';
Long.parameters = { notes: { markdown: notes, json: longData } };
