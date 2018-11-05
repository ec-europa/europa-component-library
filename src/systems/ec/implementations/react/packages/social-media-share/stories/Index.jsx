/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-social-media-share/demo/data';

import SocialMediaShare from '../SocialMediaShare';

import '@ecl/ec-specs-social-media-share/demo/demo.css';

storiesOf('SocialMediaShare', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div className="social-media-share-demo-spacer">
      <SocialMediaShare {...demoContent} />
    </div>
  ));
