/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { configureA11y } from '@storybook/addon-a11y';

import demoContentDefault from '@ecl/eu-specs-label/demo/data';

import Label from '../Label';
import './index.scss';

// Disable label check
configureA11y({
  rules: [{ id: 'label', enabled: false }],
});

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Label invalid={boolean('Invalid', false)}>
      {text('Label', demoContentDefault.label)}
    </Label>
  ));
