/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import SearchCore from '../examples/SearchCore';
import SearchStandardised from '../examples/SearchStandardised';
import SearchHarmonisedG1 from '../examples/SearchHarmonisedG1';
import SearchHarmonisedG2 from '../examples/SearchHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const Search = () => {
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

  if (template === 'standardised') return <SearchStandardised />;
  if (template === 'harmonised-g1') return <SearchHarmonisedG1 />;
  if (template === 'harmonised-g2') return <SearchHarmonisedG2 />;

  return <SearchCore />;
};
