/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-file/demo/data--without-translation';
import demoContentTranslation from '@ecl/ec-specs-file/demo/data--with-translation';

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

WithoutTranslation.story = {
  name: 'without translation',
};

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

WithTranslation.story = {
  name: 'with translation',
};
