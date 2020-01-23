/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import MainPolicyBackgroundCore from '../examples/MainPolicyBackgroundCore';
import MainPolicyBackgroundStandardised from '../examples/MainPolicyBackgroundStandardised';
import MainPolicyBackgroundHarmonisedG1 from '../examples/MainPolicyBackgroundHarmonisedG1';
import MainPolicyBackgroundHarmonisedG2 from '../examples/MainPolicyBackgroundHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Main policy background', () => {
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
      return <MainPolicyBackgroundStandardised />;
    if (template === 'harmonised-g1')
      return <MainPolicyBackgroundHarmonisedG1 />;
    if (template === 'harmonised-g2')
      return <MainPolicyBackgroundHarmonisedG2 />;

    return <MainPolicyBackgroundCore />;
  });
