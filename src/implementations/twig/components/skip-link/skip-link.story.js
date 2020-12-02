import { withKnobs, text, button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels } from '@ecl/story-utils';

import specs from '@ecl/specs-component-skip-link/demo/data';
import skipLink from './skip-link.html.twig';
import notes from './README.md';

// Button for the demo.
const btnTabLabel = 'Focus on';
const btnTabHandler = () => {
  const skipLinkEl = document.querySelector('.ecl-skip-link');
  if (skipLinkEl !== document.activeElement) {
    skipLinkEl.focus();
  }
  // Prevent the story from being reloaded.
  return false;
};

const prepareSkipLink = (data) => {
  button(btnTabLabel, btnTabHandler, tabLabels.states);
  data.label = text('label', data.label, tabLabels.required);
  data.href = text('href', data.href, tabLabels.required);

  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Navigation/Skip Link',
};

export const Default = () => skipLink(prepareSkipLink(specs));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.decorators = [withKnobs, withNotes, withCode];
