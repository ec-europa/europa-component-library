import React from 'react';
import { withKnobs, text, select, array } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/eu-specs-file/demo/data--without-translation';
import demoContentTranslation from '@ecl/eu-specs-file/demo/data--with-translation';
import demoContentThumbnail from '@ecl/eu-specs-file/demo/data--thumbnail';

import { FileDownload } from '../src/FileDownload';

export default {
  title: 'Components/File',

  decorators: [
    withKnobs,
    (story) => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
        }}
        beforeUnmount={(context) => {
          if (context.components) {
            context.components.forEach((c) => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const WithoutTranslation = () => {
  const title = text('File title', demoContent.title);

  const download = {
    ...demoContent.download,
    label: text('Download label', demoContent.download.label),
  };

  return <FileDownload {...demoContent} title={title} download={download} />;
};

WithoutTranslation.storyName = 'without translation';

export const WithTranslation = () => {
  const title = text('File title', demoContentTranslation.title);

  const download = {
    ...demoContentTranslation.download,
    label: text('Download label', demoContentTranslation.download.label),
  };

  const translation = {
    ...demoContentTranslation.translation,
    toggle: {
      ...demoContentTranslation.translation.toggle,
      label: text(
        'Toggle label',
        demoContentTranslation.translation.toggle.label
      ),
    },
  };

  return (
    <FileDownload
      {...demoContentTranslation}
      title={title}
      download={download}
      translation={translation}
      data-ecl-auto-init="FileDownload"
    />
  );
};

WithTranslation.storyName = 'with translation';

export const Thumbnail = () => {
  const meta = Array.isArray(demoContentThumbnail.detailMeta)
    ? array('Meta (comma separated)', demoContentThumbnail.detailMeta)
    : text('Meta', demoContentThumbnail.detailMeta);
  const title = text('File title', demoContentThumbnail.title);
  const description = text('Description', demoContentThumbnail.description);

  const images = {
    lanscape:
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    portrait:
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
    square:
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
  };
  const image = {
    src: select('Image example', images, demoContentThumbnail.image.src),
    alt: demoContentThumbnail.image.alt,
  };

  const download = {
    ...demoContentThumbnail.download,
    label: text('Download label', demoContentThumbnail.download.label),
  };

  const translation = {
    ...demoContentThumbnail.translation,
    toggle: {
      ...demoContentThumbnail.translation.toggle,
      label: text(
        'Toggle label',
        demoContentThumbnail.translation.toggle.label
      ),
    },
  };

  return (
    <FileDownload
      {...demoContentThumbnail}
      variant="thumbnail"
      detailMeta={meta}
      description={description}
      title={title}
      image={image}
      download={download}
      translation={translation}
      data-ecl-auto-init="FileDownload"
    />
  );
};

Thumbnail.storyName = 'with thumbnail';
