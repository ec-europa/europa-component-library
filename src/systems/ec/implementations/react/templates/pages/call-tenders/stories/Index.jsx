/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import CallTendersCore from '../examples/CallTendersCore';
import CallTendersStandardised from '../examples/CallTendersStandardised';
import CallTendersHarmonisedG1 from '../examples/CallTendersHarmonisedG1';
import CallTendersHarmonisedG2 from '../examples/CallTendersHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const CallForTenders = () => {
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

  if (template === 'standardised') return <CallTendersStandardised />;
  if (template === 'harmonised-g1') return <CallTendersHarmonisedG1 />;
  if (template === 'harmonised-g2') return <CallTendersHarmonisedG2 />;

  return <CallTendersCore />;
};

CallForTenders.story = {
  name: 'Call for tenders',
};
