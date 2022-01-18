import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-footer-core/demo/data';

import { FooterCore } from '../src/FooterCore';

export default {
  title: 'Components/Footers/Core',
  decorators: [withKnobs],
};

export function Default() {
  return <FooterCore {...demoContent} />;
}

Default.storyName = 'default';
