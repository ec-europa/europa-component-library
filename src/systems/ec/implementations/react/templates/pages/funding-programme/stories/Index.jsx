/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import FundingProgrammeCore from '../examples/FundingProgrammeCore';
import FundingProgrammeStandardised from '../examples/FundingProgrammeStandardised';
import FundingProgrammeHarmonisedG1 from '../examples/FundingProgrammeHarmonisedG1';
import FundingProgrammeHarmonisedG2 from '../examples/FundingProgrammeHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Funding programme', () => {
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

    if (template === 'standardised') return <FundingProgrammeStandardised />;
    if (template === 'harmonised-g1') return <FundingProgrammeHarmonisedG1 />;
    if (template === 'harmonised-g2') return <FundingProgrammeHarmonisedG2 />;

    return <FundingProgrammeCore />;
  });
