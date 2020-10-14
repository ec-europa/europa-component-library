import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentInfo from '@ecl/eu-specs-message/demo/data--info';
import demoContentSuccess from '@ecl/eu-specs-message/demo/data--success';
import demoContentWarning from '@ecl/eu-specs-message/demo/data--warning';
import demoContentError from '@ecl/eu-specs-message/demo/data--error';

import { Message } from '../src/Message';

export default {
  title: 'Components/Messages',

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

export const Info = () => (
  <Message
    {...demoContentInfo}
    title={text('Title', demoContentInfo.title)}
    description={text('Description', demoContentInfo.description)}
    data-ecl-auto-init="Message"
  />
);

Info.storyName = 'info';

export const Success = () => (
  <Message
    {...demoContentSuccess}
    title={text('Title', demoContentSuccess.title)}
    description={text('Description', demoContentSuccess.description)}
    data-ecl-auto-init="Message"
  />
);

Success.storyName = 'success';

export const Warning = () => (
  <Message
    {...demoContentWarning}
    title={text('Title', demoContentWarning.title)}
    description={text('Description', demoContentWarning.description)}
    data-ecl-auto-init="Message"
  />
);

Warning.storyName = 'warning';

export const Error = () => (
  <Message
    {...demoContentError}
    title={text('Title', demoContentError.title)}
    description={text('Description', demoContentError.description)}
    data-ecl-auto-init="Message"
  />
);

Error.storyName = 'error';
