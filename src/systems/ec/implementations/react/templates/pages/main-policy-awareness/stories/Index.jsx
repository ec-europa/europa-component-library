/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import MainPolicyAwarenessCore from '../examples/MainPolicyAwarenessCore';
import MainPolicyAwarenessStandardised from '../examples/MainPolicyAwarenessStandardised';
import MainPolicyAwarenessHarmonisedG1 from '../examples/MainPolicyAwarenessHarmonisedG1';
import MainPolicyAwarenessHarmonisedG2 from '../examples/MainPolicyAwarenessHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const MainPolicyAwareness = () => {
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

  if (template === 'standardised') return <MainPolicyAwarenessStandardised />;
  if (template === 'harmonised-g1') return <MainPolicyAwarenessHarmonisedG1 />;
  if (template === 'harmonised-g2') return <MainPolicyAwarenessHarmonisedG2 />;

  return <MainPolicyAwarenessCore />;
};

MainPolicyAwareness.story = {
  name: 'Main policy awareness',
};
