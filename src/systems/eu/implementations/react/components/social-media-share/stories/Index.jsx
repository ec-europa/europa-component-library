import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-social-media-share/demo/data';

import SocialMediaShare from '../src/SocialMediaShare';

storiesOf('Components/SocialMediaShare', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SocialMediaShare
      {...demoContent}
      description={text('Description', demoContent.description)}
    />
  ));
