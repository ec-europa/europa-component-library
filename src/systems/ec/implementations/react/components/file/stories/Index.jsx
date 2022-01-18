import React from 'react';
import { withKnobs, text, select, array } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-file/demo/data--without-translation';
import demoContentTranslation from '@ecl/ec-specs-file/demo/data--with-translation';
import demoContentThumbnail from '@ecl/ec-specs-file/demo/data--thumbnail';
import demoContentTaxonomy from '@ecl/ec-specs-file/demo/data--taxonomy';

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

export function WithoutTranslation() {
  const title = text('File title', demoContent.title);

  const download = {
    ...demoContent.download,
    label: text('Download label', demoContent.download.label),
  };

  return <FileDownload {...demoContent} title={title} download={download} />;
}

WithoutTranslation.storyName = 'without translation';

export function WithTranslation() {
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
}

WithTranslation.storyName = 'with translation';

export function Thumbnail() {
  const meta = Array.isArray(demoContentThumbnail.detailMeta)
    ? array('Meta (comma separated)', demoContentThumbnail.detailMeta)
    : text('Meta', demoContentThumbnail.detailMeta);
  const title = text('File title', demoContentThumbnail.title);
  const description = text('Description', demoContentThumbnail.description);

  const images = {
    landscape:
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
}

Thumbnail.storyName = 'with thumbnail';

export function Taxonomy() {
  const meta = Array.isArray(demoContentTaxonomy.detailMeta)
    ? array('Meta (comma separated)', demoContentTaxonomy.detailMeta)
    : text('Meta', demoContentTaxonomy.detailMeta);
  const title = text('File title', demoContentTaxonomy.title);
  const description = text('Description', demoContentTaxonomy.description);

  const images = {
    landscape:
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    portrait:
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
    square:
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
  };
  const image = {
    src: select('Image example', images, demoContentTaxonomy.image.src),
    alt: demoContentTaxonomy.image.alt,
  };

  const download = {
    ...demoContentTaxonomy.download,
    label: text('Download label', demoContentTaxonomy.download.label),
  };

  const translation = {
    ...demoContentTaxonomy.translation,
    toggle: {
      ...demoContentTaxonomy.translation.toggle,
      label: text('Toggle label', demoContentTaxonomy.translation.toggle.label),
    },
  };

  return (
    <FileDownload
      {...demoContentTaxonomy}
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
}

Taxonomy.storyName = 'with taxonomy';
