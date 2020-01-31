/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import MainPolicyEvaluationCore from '../examples/MainPolicyEvaluationCore';
import MainPolicyEvaluationStandardised from '../examples/MainPolicyEvaluationStandardised';
import MainPolicyEvaluationHarmonisedG1 from '../examples/MainPolicyEvaluationHarmonisedG1';
import MainPolicyEvaluationHarmonisedG2 from '../examples/MainPolicyEvaluationHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Main policy evaluation', () => {
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

    if (template === 'standardised')
      return <MainPolicyEvaluationStandardised />;
    if (template === 'harmonised-g1')
      return <MainPolicyEvaluationHarmonisedG1 />;
    if (template === 'harmonised-g2')
      return <MainPolicyEvaluationHarmonisedG2 />;

    return <MainPolicyEvaluationCore />;
  });
