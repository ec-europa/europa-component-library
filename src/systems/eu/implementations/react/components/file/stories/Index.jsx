/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/eu-specs-file/demo/data--without-translation';
import demoContentTranslation from '@ecl/eu-specs-file/demo/data--with-translation';

import VanillaFileDownload from '@ecl/eu-component-file';

import FileDownload from '../src/FileDownload';

storiesOf('Components|File', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-file]');
        const vanillaFileDownload = new VanillaFileDownload(element);
        vanillaFileDownload.init();

        // Return new context
        return { vanillaFileDownload };
      }}
      beforeUnmount={context => {
        if (context.vanillaFileDownload) {
          context.vanillaFileDownload.destroy();
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('without translation', () => {
    const title = text('File title', demoContent.title);

    const download = {
      ...demoContent.download,
      label: text('Download label', demoContent.download.label),
    };

    return <FileDownload {...demoContent} title={title} download={download} />;
  })
  .add('with translation', () => {
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
      />
    );
  });
