/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import DepartmentCore from '../examples/DepartmentCore';
import DepartmentStandardised from '../examples/DepartmentStandardised';
import DepartmentHarmonisedG1 from '../examples/DepartmentHarmonisedG1';
import DepartmentHarmonisedG2 from '../examples/DepartmentHarmonisedG2';

export default {
  title: 'Templates|Pages',
  decorators: [withKnobs],
};

export const Department = () => {
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

  if (template === 'standardised') return <DepartmentStandardised />;
  if (template === 'harmonised-g1') return <DepartmentHarmonisedG1 />;
  if (template === 'harmonised-g2') return <DepartmentHarmonisedG2 />;

  return <DepartmentCore />;
};
