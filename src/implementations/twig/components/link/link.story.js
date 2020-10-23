import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getIconKnobs,
  getComplianceKnob,
} from '@ecl/story-utils';

// Import data for demos
import uiIcons from '@ecl/resources-ec-icons/dist/lists/ui.json';
import dataDefault from '@ecl/specs-component-link/demo/data--default';
import dataCta from '@ecl/specs-component-link/demo/data--cta';
import dataStandalone from '@ecl/specs-component-link/demo/data--standalone';

import link from './link.html.twig';
import notes from './README.md';

const storyAsString = (story) =>
  `<p class="ecl-u-type-paragraph">The European Commission is the executive of ${story} and promotes its general interest.</p>`;
const storyAsNode = (story) => {
  const wrapper = document.createElement('p');
  wrapper.className = 'ecl-u-type-paragraph';
  wrapper.appendChild(story);
  return wrapper;
};

const withParagraph = (story) => {
  const demo = story();
  return typeof demo === 'string' ? storyAsString(demo) : storyAsNode(demo);
};

const iconsList = {};
iconsList.none = '';

uiIcons.forEach((icon) => {
  iconsList[icon] = icon;
});

// Preserve the adapted specs.
const prepareLink = (data) => {
  let typeLabel = tabLabels.required;
  if (data.link.type === 'default' || data.link.label === '') {
    typeLabel = tabLabels.optional;
  }
  data.link.label = text('link.label', data.link.label, tabLabels.required);
  data.link.path = text('link.path', data.link.path, tabLabels.required);
  data.link.type = select(
    'link.type',
    [data.link.type],
    data.link.type,
    typeLabel
  );

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Navigation/Link',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => {
  const dataStory = prepareLink(dataDefault);

  const name = select('icon.name', iconsList, '', tabLabels.optional);
  if (name !== '') {
    getIconKnobs(dataStory, name, 'ui', 'fluid');
  } else if (name === '' && dataStory.icon) {
    delete dataStory.icon.name;
  }

  return link(dataStory);
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withKnobs, withNotes, withCode, withParagraph];

export const Standalone = () => {
  const dataStory = prepareLink(dataStandalone);
  const name = select('icon.name', iconsList, '', tabLabels.optional);
  if (name !== '') {
    getIconKnobs(dataStory, name, 'ui', 'fluid');
  } else if (name === '' && dataStory.icon) {
    delete dataStory.icon.name;
  }

  return link(dataStory);
};

Standalone.storyName = 'standalone';
Standalone.parameters = { notes: { markdown: notes, json: dataStandalone } };

export const Cta = () => {
  const dataStory = prepareLink(dataCta);
  const name = select(
    'icon.name',
    iconsList,
    'rounded-arrow',
    tabLabels.optional
  );
  if (name !== '') {
    getIconKnobs(dataStory, name, 'ui', 'xs', '', 'rotate-90', true);
  } else if (name === '' && dataStory.icon) {
    delete dataStory.icon.name;
  }

  return link(dataStory);
};

Cta.storyName = 'cta';
Cta.parameters = { notes: { markdown: notes, json: dataCta } };
