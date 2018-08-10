/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Blockquote from '../Blockquote';

import './index.scss';

storiesOf('Blockquote', module)
  .addDecorator(withKnobs)
  .add('interactive', () => (
    <Blockquote
      author={text('Author', 'President Juncker')}
      citation={text(
        'Citation',
        'An interconnected grid will help deliver the ultimate goal of the Energy Union, to ensure affordable, secure and sustainable energy, and also growth across the EU.'
      )}
    />
  ));
