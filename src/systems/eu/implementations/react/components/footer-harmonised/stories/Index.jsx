import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-footer-harmonised/demo/data';

import { FooterHarmonised } from '../src/FooterHarmonised';

export default {
  title: 'Components/Footers/Harmonised',
  decorators: [withKnobs],
};

export function Default() {
  return <FooterHarmonised {...demoContent} />;
}

Default.storyName = 'default';
