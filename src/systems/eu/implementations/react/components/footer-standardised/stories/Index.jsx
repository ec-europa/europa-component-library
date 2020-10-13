import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-footer-standardised/demo/data';

import { FooterStandardised } from '../src/FooterStandardised';

export default {
  title: 'Components/Footers/Standardised',
  decorators: [withKnobs],
};

export const Default = () => <FooterStandardised {...demoContent} />;

Default.storyName = 'default';
