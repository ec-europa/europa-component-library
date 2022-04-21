import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import specs from '@ecl/specs-component-skip-link/demo/data';
import skipLink from './skip-link.html.twig';
import notes from './README.md';

const getArgs = () => ({
  focus: false,
});

const getArgTypes = () => ({
  focus: {
    name: 'focus',
    type: { name: 'boolean' },
    description: 'Making the link visible by receiving keyboard focus',
    table: {
      category: 'State',
    },
    control: {
      type: 'boolean',
    },
  },
});

const btnTabHandler = (state) => {
  const skipLinkEl = document.querySelector('.ecl-skip-link');
  if (skipLinkEl) {
    if (state === true) {
      skipLinkEl.focus();
    } else {
      skipLinkEl.blur();
    }
  }
};

export default {
  title: 'Components/Navigation/Skip Link',
};

export const Default = (args) => {
  document.addEventListener('DOMContentLoaded', () => {
    btnTabHandler(args.focus);
  });

  return skipLink(specs);
};

Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.decorators = [withNotes, withCode];
