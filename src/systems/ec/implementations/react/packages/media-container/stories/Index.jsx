/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-media-container/demo/data';

import MediaContainer from '../MediaContainer';

storiesOf('MediaContainer', module)
  .addDecorator(withKnobs)
  .add('video', () => (
    <MediaContainer
      description={text('Description', demoContent.description)}
      image={text('Image', demoContent.image)}
      sources={demoContent.sources}
      tracks={demoContent.tracks}
    />
  ))
  .add('image', () => (
    <MediaContainer
      description={text('Description', demoContent.description)}
      image={text('Image', demoContent.image)}
      alt={text('Alt', demoContent.alt)}
    />
  ));
