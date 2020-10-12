import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code-twig';
import { getExtraKnobs, tabLabels, getIconKnobs } from '@ecl/story-utils';

// Import data for demos
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataPrimary from '@ecl/specs-component-button/demo/data--primary';
import dataSecondary from '@ecl/specs-component-button/demo/data--secondary';
import dataCall from '@ecl/specs-component-button/demo/data--call';
import dataGhost from '@ecl/specs-component-button/demo/data--ghost';
import dataSearch from '@ecl/specs-component-button/demo/data--search';

import button from './ecl-button.html.twig';
import notes from './README.md';

const iconsList = {};
iconsList.none = '';

uiIcons.forEach((icon) => {
  iconsList[icon] = icon;
});

// Preserve the adapted specs.
const prepareButton = (data, type) => {
  const typeLabel = type ? tabLabels.required : tabLabels.optional;
  data.disabled = boolean('disabled', data.disabled, tabLabels.states);
  data.label = text('label', data.label, tabLabels.required);

  data.variant = select(
    'variant',
    [data.variant],
    data.variant,
    tabLabels.required
  );

  data.type = select('type', [data.type], data.type, typeLabel);

  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Button',
  decorators: [withKnobs, withCode, withNotes],
};

export const Primary = () => {
  const data = prepareButton(dataPrimary);
  const name = select('icon.name', iconsList, '', tabLabels.optional);
  if (name !== '') {
    getIconKnobs(data, name, 'ui', 'xs');
  } else if (name === '' && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

Primary.storyName = 'primary';
Primary.parameters = { notes: { markdown: notes, json: dataPrimary } };

export const Secondary = () => {
  const data = prepareButton(dataSecondary, true);
  const name = select('icon.name', iconsList, 'none', tabLabels.optional);
  if (name !== 'none') {
    getIconKnobs(data, name, 'ui', 'xs');
  } else if (name === 'none' && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

Secondary.storName = 'secondary';
Secondary.parameters = { notes: { markdown: notes, json: dataSecondary } };

export const CallToAction = () => {
  const data = prepareButton(dataCall);
  const name = select(
    'icon.name',
    iconsList,
    'corner-arrow',
    tabLabels.optional
  );
  if (name !== '') {
    getIconKnobs(data, name, 'ui', 'xs', 'default', 'rotate-90');
  } else if (name === '' && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

CallToAction.storyName = 'call to action';
CallToAction.parameters = { notes: { markdown: notes, json: dataCall } };

export const Ghost = () => {
  const data = prepareButton(dataGhost, true);
  const name = select('icon.name', iconsList, '', tabLabels.optional);
  if (name !== '') {
    getIconKnobs(data, name, 'ui', 'xs');
  } else if (name === '' && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

Ghost.storyName = 'text';
Ghost.parameters = { notes: { markdown: notes, json: dataGhost } };

export const Search = () => {
  const data = prepareButton(dataSearch, true);
  const name = select('icon.name', iconsList, '', tabLabels.optional);
  if (name !== '') {
    getIconKnobs(data, name, 'ui', 'xs');
  } else if (name === '' && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

Search.storyName = 'search';
Search.parameters = { notes: { markdown: notes, json: dataSearch } };
