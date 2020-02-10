/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-footer-core/demo/data';

import { FooterCore } from '../src/FooterCore';

export default {
  title: 'Components|Footers/Core',
  decorators: [withKnobs],
};

export const Default = () => <FooterCore {...demoContent} />;

Default.story = {
  name: 'default',
};
