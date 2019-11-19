/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import FeedbackForm from '../src/FeedbackForm';

storiesOf('Templates|Compositions', module)
  .addDecorator(withKnobs)
  .add('Feedback form', () => {
    return <FeedbackForm />;
  });
