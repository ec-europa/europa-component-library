/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { LoggedOut } from '../examples/LoggedOut';
import { LoggedIn } from '../examples/LoggedIn';

storiesOf('Templates|Compositions/Login bar', module)
  .addDecorator(withKnobs)
  .add('Logged out', LoggedOut)
  .add(
    'Logged in',
    () => {
      const firstname = text('First name', '<first name>');
      const lastname = text('Last name', '<last name>');
      return LoggedIn({ firstname, lastname });
    },
    {
      knobs: {
        escapeHTML: false,
      },
    }
  );
