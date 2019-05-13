/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContentInfo from '@ecl/ec-specs-message/demo/data--info';
import demoContentSuccess from '@ecl/ec-specs-message/demo/data--success';
import demoContentWarning from '@ecl/ec-specs-message/demo/data--warning';
import demoContentError from '@ecl/ec-specs-message/demo/data--error';

import VanillaMessage from '@ecl/ec-component-message';

import Message from '../src/Message';

storiesOf('Components|Messages', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-message]');
        const vanillaMessage = new VanillaMessage(element);
        vanillaMessage.init();

        // Return new context
        return { vanillaMessage };
      }}
      beforeUnmount={context => {
        if (context.vanillaMessage) {
          context.vanillaMessage.destroy();
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
    />
  ))
  .add('success', () => (
    <Message
      {...demoContentSuccess}
      title={text('Title', demoContentSuccess.title)}
      description={text('Description', demoContentSuccess.description)}
    />
  ))
  .add('warning', () => (
    <Message
      {...demoContentWarning}
      title={text('Title', demoContentWarning.title)}
      description={text('Description', demoContentWarning.description)}
    />
  ))
  .add('error', () => (
    <Message
      {...demoContentError}
      title={text('Title', demoContentError.title)}
      description={text('Description', demoContentError.description)}
    />
  ));
