/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { configureA11y } from '@storybook/addon-a11y';

import demoContentDefault from '@ecl/ec-specs-text-area/demo/data--default';

import TextArea from '../TextArea';
import './index.scss';

// Disable label check
configureA11y({
  rules: [{ id: 'label', enabled: false }],
});

storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextArea
      id="example"
      placeholder={text('Placeholder', demoContentDefault.placeholder)}
      invalid={boolean('Invalid', false)}
      disabled={boolean('Disabled', false)}
    />
  ));
