/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import MainPolicyResourcesCore from '../examples/MainPolicyResourcesCore';
import MainPolicyResourcesStandardised from '../examples/MainPolicyResourcesStandardised';
import MainPolicyResourcesHarmonisedG1 from '../examples/MainPolicyResourcesHarmonisedG1';
import MainPolicyResourcesHarmonisedG2 from '../examples/MainPolicyResourcesHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const MainPolicyResources = () => {
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

  if (template === 'standardised') return <MainPolicyResourcesStandardised />;
  if (template === 'harmonised-g1') return <MainPolicyResourcesHarmonisedG1 />;
  if (template === 'harmonised-g2') return <MainPolicyResourcesHarmonisedG2 />;

  return <MainPolicyResourcesCore />;
};

MainPolicyResources.story = {
  name: 'Main policy resources',
};
