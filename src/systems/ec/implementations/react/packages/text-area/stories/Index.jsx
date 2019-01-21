/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { configureA11y } from '@storybook/addon-a11y';

import demoContentDefault from '@ecl/ec-specs-text-area/demo/data--default';

import TextArea from '../TextArea';

// Disable label check
configureA11y({
  rules: [{ id: 'label', enabled: false }],
});

storiesOf('Forms/TextArea', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextArea
      id="example"
      label={text('Label', demoContentDefault.label)}
      placeholder={text('Placeholder', demoContentDefault.placeholder)}
      rows={number('Rows', demoContentDefault.rows)}
      invalid={boolean('Invalid', false)}
      invalidText={text('invalidText', 'Error')}
      helperText={text('helperText', 'Help message')}
      disabled={boolean('Disabled', false)}
    />
  ));
