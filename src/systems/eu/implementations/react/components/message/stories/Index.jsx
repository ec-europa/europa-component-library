/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentInfo from '@ecl/eu-specs-message/demo/data--info';
import demoContentSuccess from '@ecl/eu-specs-message/demo/data--success';
import demoContentWarning from '@ecl/eu-specs-message/demo/data--warning';
import demoContentError from '@ecl/eu-specs-message/demo/data--error';

import { Message } from '../src/Message';

storiesOf('Components/Messages', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
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
  ))
  .add('info', () => (
    <Message
      {...demoContentInfo}
      title={text('Title', demoContentInfo.title)}
      description={text('Description', demoContentInfo.description)}
      data-ecl-auto-init="Message"
    />
  ))
  .add('success', () => (
    <Message
      {...demoContentSuccess}
      title={text('Title', demoContentSuccess.title)}
      description={text('Description', demoContentSuccess.description)}
      data-ecl-auto-init="Message"
    />
  ))
  .add('warning', () => (
    <Message
      {...demoContentWarning}
      title={text('Title', demoContentWarning.title)}
      description={text('Description', demoContentWarning.description)}
      data-ecl-auto-init="Message"
    />
  ))
  .add('error', () => (
    <Message
      {...demoContentError}
      title={text('Title', demoContentError.title)}
      description={text('Description', demoContentError.description)}
      data-ecl-auto-init="Message"
    />
  ));
