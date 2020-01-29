/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import CommemorativeCoinCore from '../examples/CommemorativeCoinCore';
import CommemorativeCoinStandardised from '../examples/CommemorativeCoinStandardised';
import CommemorativeCoinHarmonisedG1 from '../examples/CommemorativeCoinHarmonisedG1';
import CommemorativeCoinHarmonisedG2 from '../examples/CommemorativeCoinHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const CommemorativeCoin = () => {
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

  if (template === 'standardised') return <CommemorativeCoinStandardised />;
  if (template === 'harmonised-g1') return <CommemorativeCoinHarmonisedG1 />;
  if (template === 'harmonised-g2') return <CommemorativeCoinHarmonisedG2 />;

  return <CommemorativeCoinCore />;
};
