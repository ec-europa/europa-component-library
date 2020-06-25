/* eslint-disable no-underscore-dangle, import/no-extraneous-dependencies */

import { withKnobs, text } from '@storybook/addon-knobs';

import { LoggedOut } from '../examples/LoggedOut';
import { LoggedIn } from '../examples/LoggedIn';

export default {
  title: 'Templates/Compositions/Login bar',
  decorators: [withKnobs],
};

export const _LoggedOut = LoggedOut;

_LoggedOut.story = {
  name: 'Logged out',
};

export const _LoggedIn = () => {
  const firstname = text('First name', '<first name>');
  const lastname = text('Last name', '<last name>');
  return LoggedIn({ firstname, lastname });
};

_LoggedIn.story = {
  name: 'Logged in',

  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
