/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-text-area/demo/data--default';

import TextArea from '../src/TextArea';

storiesOf('Components|Forms/TextArea', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextArea
      id="example"
      hideLabel={boolean('Hide label', false)}
      label={text('Label', demoContentDefault.label)}
      rows={number('Rows', demoContentDefault.rows)}
      placeholder={text('Placeholder', demoContentDefault.placeholder)}
      helperText={text('Helper text', 'Help message')}
      invalid={boolean('Invalid', false)}
      invalidText={text('Invalid text', 'Error')}
      disabled={boolean('Disabled', false)}
    />
  ));
