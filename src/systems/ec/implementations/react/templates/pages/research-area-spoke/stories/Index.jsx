/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import ResearchAreaSpokeCore from '../examples/ResearchAreaSpokeCore';
import ResearchAreaSpokeStandardised from '../examples/ResearchAreaSpokeStandardised';
import ResearchAreaSpokeHarmonisedG1 from '../examples/ResearchAreaSpokeHarmonisedG1';
import ResearchAreaSpokeHarmonisedG2 from '../examples/ResearchAreaSpokeHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Research area spoke', () => {
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

    if (template === 'standardised') return <ResearchAreaSpokeStandardised />;
    if (template === 'harmonised-g1') return <ResearchAreaSpokeHarmonisedG1 />;
    if (template === 'harmonised-g2') return <ResearchAreaSpokeHarmonisedG2 />;

    return <ResearchAreaSpokeCore />;
  });
