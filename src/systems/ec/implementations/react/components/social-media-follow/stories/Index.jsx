import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-social-media-follow/demo/data';

import SocialMediaFollow from '../src/SocialMediaFollow';

export default {
  title: 'Components/SocialMediaFollow',
  decorators: [withKnobs],
};

export const Horizontal = () => (
  <SocialMediaFollow
    {...demoContent}
    description={text('Description', demoContent.description)}
  />
);

Horizontal.story = {
  name: 'horizontal',
};

export const Vertical = () => (
  <SocialMediaFollow
    {...demoContent}
    variant="vertical"
    description={text('Description', demoContent.description)}
  />
);

Vertical.story = {
  name: 'vertical',
};
