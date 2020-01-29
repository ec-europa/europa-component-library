/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import MainPolicyLegislationCore from '../examples/MainPolicyLegislationCore';
import MainPolicyLegislationStandardised from '../examples/MainPolicyLegislationStandardised';
import MainPolicyLegislationHarmonisedG1 from '../examples/MainPolicyLegislationHarmonisedG1';
import MainPolicyLegislationHarmonisedG2 from '../examples/MainPolicyLegislationHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const MainPolicyLegislation = () => {
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

  if (template === 'standardised') return <MainPolicyLegislationStandardised />;
  if (template === 'harmonised-g1')
    return <MainPolicyLegislationHarmonisedG1 />;
  if (template === 'harmonised-g2')
    return <MainPolicyLegislationHarmonisedG2 />;

  return <MainPolicyLegislationCore />;
};

MainPolicyLegislation.story = {
  name: 'Main policy legislation',
};
