/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-social-media-follow/demo/data';

import SocialMediaFollow from '../SocialMediaFollow';

import '@ecl/ec-specs-social-media-follow/demo/demo.css';

storiesOf('SocialMediaFollow', module)
  .addDecorator(withKnobs)
  .add('horizontal', () => (
    <SocialMediaFollow
      {...demoContent.default_data}
      description={text('Description', demoContent.default_data.description)}
    />
  ))
  .add('vertical', () => (
    <SocialMediaFollow
      {...demoContent.default_data}
      variant="vertical"
      description={text('Description', demoContent.default_data.description)}
    />
  ))
  .add('webtools', () => (
    <SocialMediaFollow
      {...demoContent.webtools}
      variant="webtools"
      description={text('Description', demoContent.webtools.description)}
    />
  ));
