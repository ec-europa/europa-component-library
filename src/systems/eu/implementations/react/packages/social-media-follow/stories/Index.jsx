/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-social-media-follow/demo/data';

import SocialMediaFollow from '../SocialMediaFollow';

storiesOf('SocialMediaFollow', module)
  .addDecorator(withKnobs)
  .add('horizontal', () => (
    <SocialMediaFollow
      {...demoContent}
      description={text('Description', demoContent.description)}
    />
  ))
  .add('vertical', () => (
    <SocialMediaFollow
      {...demoContent}
      variant="vertical"
      description={text('Description', demoContent.description)}
    />
  ));
