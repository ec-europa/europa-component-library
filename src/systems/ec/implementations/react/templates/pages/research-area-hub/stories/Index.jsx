/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import ResearchAreaHubCore from '../examples/ResearchAreaHubCore';
import ResearchAreaHubStandardised from '../examples/ResearchAreaHubStandardised';
import ResearchAreaHubHarmonisedG1 from '../examples/ResearchAreaHubHarmonisedG1';
import ResearchAreaHubHarmonisedG2 from '../examples/ResearchAreaHubHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const ResearchAreaHub = () => {
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

  if (template === 'standardised') return <ResearchAreaHubStandardised />;
  if (template === 'harmonised-g1') return <ResearchAreaHubHarmonisedG1 />;
  if (template === 'harmonised-g2') return <ResearchAreaHubHarmonisedG2 />;

  return <ResearchAreaHubCore />;
};

ResearchAreaHub.story = {
  name: 'Research area hub',
};
