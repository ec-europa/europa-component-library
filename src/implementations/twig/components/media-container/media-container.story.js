import he from 'he';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';

// Import data for demos
import demoImg from '@ecl/specs-component-media-container/demo/data--image';
import demoVideo from '@ecl/specs-component-media-container/demo/data--video';
import demoEmbed from '@ecl/specs-component-media-container/demo/data--embed-video';
// import exampleImg from '../../../../static/images/example-image.jpg';
import mediaContainer from './media-container.html.twig';
import notes from './README.md';

const prepareMediaContainer = (data, media) => {
  if (media === 'video') {
    data.description = text(
      'description',
      demoVideo.description,
      tabLabels.optional
    );
    data.alt = text('alt', demoVideo.alt, tabLabels.required);
    data.sources = object('sources', demoVideo.sources, tabLabels.required);
    data.tracks = object('tracks', demoVideo.tracks, tabLabels.required);
  } else if (media === 'image') {
    data.description = text(
      'description',
      demoImg.description,
      tabLabels.optional
    );
    data.alt = text('alt', demoImg.alt, tabLabels.required);
    data.image = text('image', demoImg.image, tabLabels.required);
  } else {
    const options = ['16-9', '4-3', '3-2', '1-1'];
    data.embedded_media = he.decode(
      text('embedded_media', data.embedded_media, tabLabels.required)
    );
    data.description = text(
      'description',
      demoVideo.description,
      tabLabels.optional
    );
    data.ratio = select('ratio', options, data.ratio, tabLabels.required);
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Media container',
  decorators: [withKnobs, withNotes, withCode],
};

export const Image = () =>
  mediaContainer(prepareMediaContainer(demoImg, 'image'));

Image.storyName = 'image';
Image.parameters = { notes: { markdown: notes, json: demoImg } };

export const Video = () =>
  mediaContainer(prepareMediaContainer(demoVideo, 'video'));

Video.Name = 'video';
Video.parameters = { notes: { markdown: notes, json: demoVideo } };

export const EmbeddedVideo = () =>
  mediaContainer(prepareMediaContainer(demoEmbed, 'embed'));

EmbeddedVideo.storyName = 'embedded video';
EmbeddedVideo.parameters = { notes: { markdown: notes, json: demoEmbed } };
