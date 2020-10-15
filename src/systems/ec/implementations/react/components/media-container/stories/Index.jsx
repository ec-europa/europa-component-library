import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/ec-specs-media-container/demo/data--image';
import demoContentVideo from '@ecl/ec-specs-media-container/demo/data--video';

import MediaContainer from '../src/MediaContainer';

export default {
  title: 'Components/MediaContainer',
  decorators: [withKnobs],
};

export const Video = () => (
  <MediaContainer
    description={text('Description', demoContentVideo.description)}
    image={text('Image', demoContentVideo.image)}
    sources={demoContentVideo.sources}
    tracks={demoContentVideo.tracks}
    alt={text('Alt', demoContentVideo.alt)}
  />
);

Video.storyName = 'video';

export const Image = () => (
  <MediaContainer
    description={text('Description', demoContentImage.description)}
    image={text('Image', demoContentImage.image)}
    alt={text('Alt', demoContentImage.alt)}
  />
);

Image.storyName = 'image';

export const EmbedVideo = () => (
  <MediaContainer
    description={text('Description', demoContentVideo.description)}
  >
    <iframe
      title="New digital strategy"
      width="350"
      height="197"
      src="https://www.youtube.com/embed/fgi-GSCB6ho"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </MediaContainer>
);

EmbedVideo.storyName = 'embedded video';
