import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-footer-core/demo/data';

import { FooterCore } from '../src/FooterCore';

export default {
  title: 'Components/Footers/Core',
  decorators: [withKnobs],
};

export const Default = () => <FooterCore {...demoContent} />;

Default.storyName = 'default';
