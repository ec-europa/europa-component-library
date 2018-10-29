/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContentError from '@ecl/eu-specs-message/demo/data--error';

import Message from '../Message';

storiesOf('Message', module)
  .addDecorator(withKnobs)
  .add('error', () => (
    <Message
      {...demoContentError}
      title={text('Title', demoContentError.title)}
      description={text('Description', demoContentError.description)}
    />
  ));
