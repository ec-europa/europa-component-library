import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import specs from '@ecl/specs-component-pagination/demo/data';

import pagination from './pagination.html.twig';
import notes from './README.md';

const preparePagination = (data) => {
  data.label = text('label', data.label, tabLabels.required);
  data.icon_path = optionsKnob(
    'icon_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.optional
  );
  data.items.forEach((item, i) => {
    if (item.type) {
      item.type = select(
        `items[${i}].type`,
        [item.type],
        item.type,
        tabLabels.required
      );
    }
    item.aria_label = text(
      `items[${i}].aria_label`,
      item.aria_label,
      tabLabels.required
    );
    if (item.link) {
      item.link.link.label = text(
        `items[${i}].link.link.label`,
        item.link.link.label,
        tabLabels.required
      );
      item.link.link.path = text(
        `items[${i}].link.link.path`,
        item.link.link.path,
        tabLabels.required
      );
      if (item.link.icon) {
        item.link.link.icon_position = select(
          `items[${i}].link.link.icon_position`,
          [item.link.link.icon_position],
          item.link.link.icon_position,
          tabLabels.required
        );
        item.link.icon.name = select(
          `items[${i}].link.icon.name`,
          [item.link.icon.name],
          item.link.icon.name,
          tabLabels.required
        );
        item.link.icon.type = select(
          `items[${i}].link.icon.type`,
          [item.link.icon.type],
          item.link.icon.type,
          tabLabels.required
        );
        item.link.icon.size = select(
          `items[${i}].link.icon.size`,
          [item.link.icon.size],
          item.link.icon.size,
          tabLabels.required
        );
        item.link.icon.transform = select(
          `items[${i}].link.icon.transform`,
          [item.link.icon.transform],
          item.link.icon.transform,
          tabLabels.required
        );
        item.link.icon.path = optionsKnob(
          `items[${i}].link.icon.path (only needed if icon_path is not set)`,
          { current: defaultSprite, 'no path': '' },
          defaultSprite,
          { display: 'inline-radio' },
          tabLabels.required
        );
      }
    }
  });

  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Navigation/Pagination',
};

export const Default = () => pagination(preparePagination(specs));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.decorators = [withKnobs, withNotes, withCode];
