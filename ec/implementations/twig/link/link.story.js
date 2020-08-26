import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getIconKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataDefault from './demo/data--default';
import dataCta from './demo/data--call-to-action';
import dataStandalone from './demo/data--standalone';
import link from './ecl-link.html.twig';
import notes from './README.md';

const iconsList = {};
iconsList.none = '';

uiIcons.forEach((icon) => {
  iconsList[icon] = icon;
});

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
    getIconKnobs(dataStory, name, 'ui', 'xs');
  } else if (name === '' && dataStory.icon) {
    delete dataStory.icon.name;
  }

  const demo = document.createDocumentFragment();
  const wrapper = document.createElement('p');
  wrapper.className = 'ecl-u-type-paragraph';
  wrapper.setAttribute('demo_only', true);
  wrapper.innerHTML = link(dataStory);
  demo.appendChild(wrapper);

  return demo;
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Standalone = () => {
  const dataStory = prepareLink(dataStandalone);
  const name = select('icon.name', iconsList, '', tabLabels.optional);
  if (name !== '') {
    getIconKnobs(dataStory, name, 'ui', 'xs');
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
