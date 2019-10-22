/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import MainPolicyAwarenessPageExample from '../examples/Default';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Main policy awareness', () => {
    const template = radios(
      'Template',
      {
        Core: 'core',
        Standardised: 'standardised',
        'Harmonised group 1': 'harmonised-g1',
        'Harmonised group 2': 'harmonised-g2',
      },
      'core'
    );

    return <MainPolicyAwarenessPageExample template={template} />;
  });
