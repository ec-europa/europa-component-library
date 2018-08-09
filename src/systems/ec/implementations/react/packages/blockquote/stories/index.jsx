/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Blockquote from '../Blockquote';

import './index.scss';

storiesOf('Blockquote', module)
  .addDecorator(withKnobs)
  .add('interactive', () => (
    <Blockquote author={text('Author', 'Clint Eastwood')}>
      {text('Citation', 'We boil at different degrees.')}
    </Blockquote>
  ));
