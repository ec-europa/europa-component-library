import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/ec-specs-media-container/demo/data--image';
import demoContentVideo from '@ecl/ec-specs-media-container/demo/data--video';

import MediaContainer from '../src/MediaContainer';

export default {
  title: 'Components/MediaContainer',
  decorators: [withKnobs],
};

export function Video() {
  return (
    <div className="ecl-container">
      <MediaContainer
        description={text('Description', demoContentVideo.description)}
        image={text('Image', demoContentVideo.image)}
        sources={demoContentVideo.sources}
        tracks={demoContentVideo.tracks}
        alt={text('Alt', demoContentVideo.alt)}
        isFullWidth={boolean('Full width', false)}
      />
    </div>
  );
}

Video.storyName = 'video';

export function Image() {
  return (
    <div className="ecl-container">
      <MediaContainer
        description={text('Description', demoContentImage.description)}
        image={text('Image', demoContentImage.image)}
        alt={text('Alt', demoContentImage.alt)}
        isFullWidth={boolean('Full width', false)}
      />
    </div>
  );
}

Image.storyName = 'image';

export function EmbedVideo() {
  return (
    <div className="ecl-container">
      <MediaContainer
        description={text('Description', demoContentVideo.description)}
        isFullWidth={boolean('Full width', false)}
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
    </div>
  );
}

EmbedVideo.storyName = 'embedded video';
