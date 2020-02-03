/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-social-media-share/demo/data';

import SocialMediaShare from '../src/SocialMediaShare';

export default {
  title: 'Components|SocialMediaShare',
  decorators: [withKnobs],
};

export const Default = () => (
  <SocialMediaShare
    {...demoContent}
    description={text('Description', demoContent.description)}
  />
);

Default.story = {
  name: 'default',
};
