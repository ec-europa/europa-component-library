import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import demoContent from '@ecl/eu-specs-label/demo/data';

import Label from '../src/Label';

const variant = {
  'low importance': 'low',
  'medium importance': 'medium',
  'high importance': 'high',
  highlight: 'highlight',
};

export default {
  title: 'Components/Label',
  decorators: [withKnobs],
};

export const Default = () => (
  <Label
    variant={select('Importance', variant, 'low')}
    label={text('Label', demoContent.label)}
  />
);

Default.storyName = 'default';
