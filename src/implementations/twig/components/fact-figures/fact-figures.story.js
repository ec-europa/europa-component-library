import { withNotes } from '@ecl/storybook-addon-notes';
import {
  withKnobs,
  boolean,
  text,
  button,
  select,
} from '@storybook/addon-knobs';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';

import generalIcons from '@ecl/resources-ec-icons/dist/lists/general.json';
import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import data3Col from '@ecl/specs-component-fact-figures/demo/data--3-col';
import data4Col from '@ecl/specs-component-fact-figures/demo/data--4-col';

import factFigures from './fact-figures.html.twig';
import notes from './README.md';

const iconsList = [];
generalIcons.forEach((icon) => {
  iconsList.push(icon);
});

// Preserve original data.
const items3 = JSON.parse(JSON.stringify(data3Col.items));
const items4 = JSON.parse(JSON.stringify(data4Col.items));
const data3 = { ...data3Col };
const data4 = { ...data4Col };
// Button callback.
// 3 Columns.
const viewAll3Toggler = () => {
  data3.view_all = data3.view_all ? false : data3Col.view_all;
};
// 4 Columns.
const viewAll4Toggler = () => {
  data4.view_all = data4.view_all ? false : data4Col.view_all;
};
// 3 Columns.
const desc3Toggler = () => {
  data3.items.forEach((item, i) => {
    if (item.description) {
      item.description = '';
    } else {
      item.description = items3[i].description;
    }
  });
};
// 4 Columns.
const desc4Toggler = () => {
  data4.items.forEach((item, i) => {
    if (item.description) {
      item.description = '';
    } else {
      item.description = items4[i].description;
    }
  });
};
// Knobs for the items.
const formatItem = (item, index) => {
  item.value = text(`items[${index}].value`, item.value, tabLabels.required);
  item.title = text(`items[${index}].title`, item.title, tabLabels.required);
  if (item.description) {
    item.description = text(
      `items[${index}].description`,
      item.description,
      tabLabels.optional
    );
  }
  item.icon.name = select(
    `items[${index}].icon.name`,
    [...iconsList],
    'digital',
    tabLabels.optional
  );
  item.icon.path = text(
    `items[${index}].icon.path`,
    defaultSprite,
    tabLabels.optional
  );

  return item;
};
// prepare the knobs for the stories.
const prepareFactFigures = (data) => {
  data.column = text('column', data.column, tabLabels.required);
  data.display_icons = boolean('display_icons', true, tabLabels.optional);
  data.view_all = data.view_all.link
    ? {
        link: {
          label: text(
            'view_all.link.label',
            data.view_all.link.label,
            tabLabels.optional
          ),
          path: text(
            'view_all.link.path',
            data.view_all.link.path,
            tabLabels.optional
          ),
        },
      }
    : false;

  data.items = data.items.map((item) => formatItem(item));

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Fact figures',
  decorators: [withNotes, withKnobs, withCode],
};

export const Columns3 = () => {
  button('With or without view_links', viewAll3Toggler, tabLabels.cases);
  button('With or without description', desc3Toggler, tabLabels.cases);

  return factFigures(prepareFactFigures(data3));
};

Columns3.storyName = '3 Columns';
Columns3.parameters = { notes: { markdown: notes, json: data3 } };

export const Columns4 = () => {
  button('With or without view_links', viewAll4Toggler, tabLabels.cases);
  button('With or without description', desc4Toggler, tabLabels.cases);

  return factFigures(prepareFactFigures(data4));
};

Columns4.storyName = '4 Columns';
Columns4.parameters = { notes: { markdown: notes, json: data4 } };
