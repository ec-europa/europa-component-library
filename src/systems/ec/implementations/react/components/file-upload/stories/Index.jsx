/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-file-upload/demo/data--default';

import FileUpload from '../src/FileUpload';

storiesOf('Components|Forms/File upload', module)
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
  .add(
    'default',
    () => (
      <FileUpload
        {...demoContentDefault}
        data-ecl-auto-init="FileUpload"
        id="example-file-upload"
        label={text('Label', demoContentDefault.label)}
        helperText={text('Helper text', demoContentDefault.helperText)}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', demoContentDefault.invalidText)}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', true)}
        requiredText={text('Required text', demoContentDefault.requiredText)}
        optionalText={text('Optional text', demoContentDefault.optionalText)}
        buttonLabel={text('Button label', demoContentDefault.buttonLabel)}
      />
    ),
    {
      knobs: {
        escapeHTML: false,
      },
    }
  )
  .add(
    'multiple',
    () => (
      <FileUpload
        {...demoContentDefault}
        data-ecl-auto-init="FileUpload"
        id="example-file-upload"
        label={text('Label', demoContentDefault.label)}
        helperText={text('Helper text', demoContentDefault.helperText)}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', demoContentDefault.invalidText)}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', true)}
        requiredText={text('Required text', demoContentDefault.requiredText)}
        optionalText={text('Optional text', demoContentDefault.optionalText)}
        buttonLabel={text('Button label', demoContentDefault.buttonLabel)}
        multiple
      />
    ),
    {
      knobs: {
        escapeHTML: false,
      },
    }
  );
