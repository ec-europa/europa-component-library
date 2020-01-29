/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentInfo from '@ecl/ec-specs-message/demo/data--info';
import demoContentSuccess from '@ecl/ec-specs-message/demo/data--success';
import demoContentWarning from '@ecl/ec-specs-message/demo/data--warning';
import demoContentError from '@ecl/ec-specs-message/demo/data--error';

import { Message } from '../src/Message';

export default {
  title: 'Components|Messages',

  decorators: [
    withKnobs,
    story => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const components = window.ECL.autoInit();
          return { components };
        }}
        beforeUnmount={context => {
          if (context.components) {
            context.components.forEach(c => c.destroy());
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

Info.story = {
  name: 'info',
};

export const Success = () => (
  <Message
    {...demoContentSuccess}
    title={text('Title', demoContentSuccess.title)}
    description={text('Description', demoContentSuccess.description)}
    data-ecl-auto-init="Message"
  />
);

Success.story = {
  name: 'success',
};

export const Warning = () => (
  <Message
    {...demoContentWarning}
    title={text('Title', demoContentWarning.title)}
    description={text('Description', demoContentWarning.description)}
    data-ecl-auto-init="Message"
  />
);

Warning.story = {
  name: 'warning',
};

export const Error = () => (
  <Message
    {...demoContentError}
    title={text('Title', demoContentError.title)}
    description={text('Description', demoContentError.description)}
    data-ecl-auto-init="Message"
  />
);

Error.story = {
  name: 'error',
};
