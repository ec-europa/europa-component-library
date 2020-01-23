/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import PersonListCore from '../examples/PersonListCore';
import PersonListStandardised from '../examples/PersonListStandardised';
import PersonListHarmonisedG1 from '../examples/PersonListHarmonisedG1';
import PersonListHarmonisedG2 from '../examples/PersonListHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Person list', () => {
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

    if (template === 'standardised') return <PersonListStandardised />;
    if (template === 'harmonised-g1') return <PersonListHarmonisedG1 />;
    if (template === 'harmonised-g2') return <PersonListHarmonisedG2 />;

    return <PersonListCore />;
  });
