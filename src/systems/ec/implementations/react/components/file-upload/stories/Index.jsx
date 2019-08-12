/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-file-upload/demo/data--default';

import FileUpload from '../src/FileUpload';

storiesOf('Components|Forms/File upload', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <FileUpload
        id="example"
        label={text('Label', demoContentDefault.label)}
        helperText={text('Helper text', "This is the input's helper text.")}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', 'This is the error message')}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', true)}
        requiredText={text('Required text', '*')}
        optionalText={text('Optional text', ' (optional)')}
      />
    ),
    {
      knobs: {
        escapeHTML: false,
      },
    }
  );
