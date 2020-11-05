import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import demoData from '@ecl/specs-component-accordion/demo/data';

import accordion from './accordion.html.twig';
import notes from './README.md';

const prepareAccordion = (data) => {
  data.items.forEach((item, index) => {
    const levels = [1, 2, 3, 4, 5, 6];
    const { id, level, toggle, content } = item;
    item.id = text(`items[${index}].id`, id, tabLabels.required);
    item.content = text(`items[${index}].content`, content, tabLabels.required);
    item.toggle.label = text(
      `items[${index}].toggle.label`,
      toggle.label,
      tabLabels.required
    );
    item.toggle.icon.path = optionsKnob(
      `items[${index}].toggle.icon.path`,
      { current: defaultSprite, 'no path': '' },
      defaultSprite,
      { display: 'inline-radio' },
      tabLabels.required
    );
    item.level = select(
      `items[${index}].level`,
      levels,
      level,
      tabLabels.optional
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Accordion',
};

export const Default = () => accordion(prepareAccordion(demoData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withKnobs, withCode, withNotes];
