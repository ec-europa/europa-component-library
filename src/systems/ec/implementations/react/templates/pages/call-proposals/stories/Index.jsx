/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import CallProposalsCore from '../examples/CallProposalsCore';
import CallProposalsStandardised from '../examples/CallProposalsStandardised';
import CallProposalsHarmonisedG1 from '../examples/CallProposalsHarmonisedG1';
import CallProposalsHarmonisedG2 from '../examples/CallProposalsHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Call for proposals', () => {
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

    if (template === 'standardised') return <CallProposalsStandardised />;
    if (template === 'harmonised-g1') return <CallProposalsHarmonisedG1 />;
    if (template === 'harmonised-g2') return <CallProposalsHarmonisedG2 />;

    return <CallProposalsCore />;
  });
