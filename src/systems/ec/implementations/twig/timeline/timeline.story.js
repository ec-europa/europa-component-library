import { withKnobs, number, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import he from 'he';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';
import timeline from './ecl-timeline.html.twig';
import notes from './README.md';

const prepareTimeline = (data) => {
  const { from, to } = data.hide;
  let hiddenCount = 0;
  if (to > 0) {
    hiddenCount = to - from;
  } else {
    hiddenCount = data.items.length + to - from;
  }
  data.toggle_collapsed = text(
    'toggle_collapsed',
    `Show ${hiddenCount} more items`,
    tabLabels.required
  );
  data.toggle_expanded = text(
    'toggle_expanded',
    `Hide ${hiddenCount} items`,
    tabLabels.required
  );
  data.icon_path = optionsKnob(
    'icon_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );

  data.hide.from = number('hide.from', data.hide.from, {}, tabLabels.optional);
  data.hide.to = number('hide.to', data.hide.to, {}, tabLabels.optional);

  data.items.forEach((item, i) => {
    const { id, label, title, content } = item;
    item.label = text(`items[${i}].label`, label, tabLabels.required);
    item.id = text(`items[${i}].id`, id, tabLabels.optional);
    item.title = text(`items[${i}].title`, title, tabLabels.optional);
    item.content = he.decode(
      text(`items[${i}].content`, content, tabLabels.required)
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Timeline',
};

export const Default = () => timeline(prepareTimeline(demoData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withKnobs, withCode, withNotes];
