/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import PersonCore from '../examples/PersonCore';
import PersonStandardised from '../examples/PersonStandardised';
import PersonHarmonisedG1 from '../examples/PersonHarmonisedG1';
import PersonHarmonisedG2 from '../examples/PersonHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Person biography', () => {
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

    if (template === 'standardised') return <PersonStandardised />;
    if (template === 'harmonised-g1') return <PersonHarmonisedG1 />;
    if (template === 'harmonised-g2') return <PersonHarmonisedG2 />;

    return <PersonCore />;
  });
