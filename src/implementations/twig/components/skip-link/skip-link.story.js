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

const withParagraph = (story) => {
  const demo = story();
  return `${demo}<p class="ecl-u-type-m">Use the keyboard tab or the Storybook control to display the skip link</p>`;
};

export default {
  title: 'Components/Navigation/Skip Link',
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  document.addEventListener('DOMContentLoaded', () => {
    btnTabHandler(args.focus);
  });

  const renderedSkipLink = await skipLink(specs);
  return renderedSkipLink;
};
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.decorators = [withNotes, withCode, withParagraph];
