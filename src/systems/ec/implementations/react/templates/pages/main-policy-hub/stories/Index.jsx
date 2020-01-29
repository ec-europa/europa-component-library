/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import MainPolicyHubCore from '../examples/MainPolicyHubCore';
import MainPolicyHubStandardised from '../examples/MainPolicyHubStandardised';
import MainPolicyHubHarmonisedG1 from '../examples/MainPolicyHubHarmonisedG1';
import MainPolicyHubHarmonisedG2 from '../examples/MainPolicyHubHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const MainPolicyHub = () => {
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

  if (template === 'standardised') return <MainPolicyHubStandardised />;
  if (template === 'harmonised-g1') return <MainPolicyHubHarmonisedG1 />;
  if (template === 'harmonised-g2') return <MainPolicyHubHarmonisedG2 />;

  return <MainPolicyHubCore />;
};

MainPolicyHub.story = {
  name: 'Main policy hub',
};
