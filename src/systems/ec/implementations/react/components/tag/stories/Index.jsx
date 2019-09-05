/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Tag from '../src/Tag';

storiesOf('Components|Tag', module)
  .addDecorator(withKnobs)
  .add('as a link', () => (
    <Tag label={text('Label', 'Link tag')} href={text('Link', '/example')} />
  ))
  .add('as a button', () => (
    <Tag label={text('Label', 'Button tag')} type="button" />
  ))
  .add('removable', () => (
    <Tag label={text('Label', 'Removable tag')} variant="removable" />
  ));
