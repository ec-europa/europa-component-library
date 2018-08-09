/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Button from '../Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with custom text', () => (
    <Button>{text('Label', 'Hello Storybook')}</Button>
  ))
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
