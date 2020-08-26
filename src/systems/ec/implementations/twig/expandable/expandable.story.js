import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import he from 'he';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import expandable from './ecl-expandable.html.twig';
import notes from './README.md';

const prepareExpandable = (data) => {
  data.id = select('id', [data.id], data.id, tabLabels.required);
  data.label_expanded = text(
    'label_expanded',
    data.label_expanded,
    tabLabels.required
  );
  data.label_collapsed = text(
    'label_collapsed',
    data.label_collapsed,
    tabLabels.required
  );
  data.content = he.decode(text('content', data.content, tabLabels.required));
  data.button.icon.path = optionsKnob(
    'button.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Expandables',
};

export const Default = () => expandable(prepareExpandable(demoData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withKnobs, withCode, withNotes];
