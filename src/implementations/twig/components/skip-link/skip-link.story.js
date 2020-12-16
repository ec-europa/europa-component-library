import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import specs from '@ecl/specs-component-skip-link/demo/data';
import skipLink from './skip-link.html.twig';
import notes from './README.md';

const getArgTypes = () => {
  return {
    focus: {
      name: 'focus',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Making the link visible by receiving keyboard focus',
      table: {
        category: 'State',
      },
      control: {
        type: 'boolean',
      },
    },
  };
};

const btnTabHandler = (state) => {
  if (state) {
    setTimeout(() => {
      const skipLinkEl = document.querySelector('.ecl-skip-link');
      skipLinkEl.focus();
    }, 100);
  }

  return false;
};

export default {
  title: 'Components/Navigation/Skip Link',
};

export const Default = (args) => {
  btnTabHandler(args.focus);

  return skipLink(specs);
};

Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.decorators = [withNotes, withCode];
