/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import parse from 'html-react-parser';

import demoContentDefault from '@ecl/ec-specs-file-upload/demo/data--default';
import demoContentMultiple from '@ecl/ec-specs-file-upload/demo/data--multiple';

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
        id="example-file-upload-default"
        label={text('Label', demoContentDefault.label)}
        helperText={parse(text('Helper text', demoContentDefault.helperText))}
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
        {...demoContentMultiple}
        data-ecl-auto-init="FileUpload"
        id="example-file-upload-multiple"
        label={text('Label', demoContentMultiple.label)}
        helperText={parse(text('Helper text', demoContentMultiple.helperText))}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', demoContentMultiple.invalidText)}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', true)}
        requiredText={text('Required text', demoContentMultiple.requiredText)}
        optionalText={text('Optional text', demoContentMultiple.optionalText)}
        buttonLabel={text('Button label', demoContentMultiple.buttonLabel)}
        multiple
      />
    ),
    {
      knobs: {
        escapeHTML: false,
      },
    }
  )
  .add(
    'disabled',
    () => (
      <FileUpload
        {...demoContentDefault}
        data-ecl-auto-init="FileUpload"
        id="example-file-upload-disable"
        label={text('Label', demoContentDefault.label)}
        helperText={parse(text('Helper text', demoContentDefault.helperText))}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', demoContentDefault.invalidText)}
        disabled={boolean('Disabled', true)}
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
    'invalid',
    () => (
      <FileUpload
        {...demoContentDefault}
        data-ecl-auto-init="FileUpload"
        id="example-file-upload-invalid"
        label={text('Label', demoContentDefault.label)}
        helperText={parse(text('Helper text', demoContentDefault.helperText))}
        invalid={boolean('Invalid', true)}
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
    'optional',
    () => (
      <FileUpload
        {...demoContentDefault}
        data-ecl-auto-init="FileUpload"
        id="example-file-upload-invalid"
        label={text('Label', demoContentDefault.label)}
        helperText={parse(text('Helper text', demoContentDefault.helperText))}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', demoContentDefault.invalidText)}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', false)}
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
  );
