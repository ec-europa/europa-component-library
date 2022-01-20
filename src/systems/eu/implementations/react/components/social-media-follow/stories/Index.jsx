import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-social-media-follow/demo/data';

import SocialMediaFollow from '../src/SocialMediaFollow';

export default {
  title: 'Components/SocialMediaFollow',
  decorators: [withKnobs],
};

export function Horizontal() {
  return (
    <SocialMediaFollow
      {...demoContent}
      description={text('Description', demoContent.description)}
    />
  );
}

Horizontal.storyName = 'horizontal';

export function Vertical() {
  return (
    <SocialMediaFollow
      {...demoContent}
      variant="vertical"
      description={text('Description', demoContent.description)}
    />
  );
}

Vertical.storyName = 'vertical';
