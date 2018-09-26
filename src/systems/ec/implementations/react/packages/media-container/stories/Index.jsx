import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/ec-specs-media-container/demo/data--image';
import demoContentImageShade from '@ecl/ec-specs-media-container/demo/data--image-shade';

import MediaContainer from '../MediaContainer';

storiesOf('MediaContainer', module)
  .addDecorator(withKnobs)
  .add('image', () => (
    <MediaContainer
      variant="image"
      shortDescription={text('Title', demoContentImage.shortDescription)}
      description={text('Description', demoContentImage.description)}
      poster={text('Poster', demoContentImage.poster)}
      videos={demoContentImage.videos}
    />
  ))
  .add('image-shade', () => (
    <MediaContainer
      variant="image-shade"
      shortDescription={text('Title', demoContentImageShade.shortDescription)}
      description={text('Description', demoContentImageShade.description)}
      videos={demoContentImageShade.videos}
    />
  ));
