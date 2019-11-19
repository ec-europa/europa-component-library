/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import FeedbackForm from '../src/FeedbackForm';

storiesOf('Templates|Compositions', module)
  .addDecorator(withKnobs)
  .add('Feedback form', () => {
    const state = radios(
      'State',
      {
        Default: 'default',
        'Missing translation': 'translation',
        'Missing information': 'information',
        'Technical issue': 'technical',
      },
      'default'
    );

    return <FeedbackForm state={state} />;
  });
