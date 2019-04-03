/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import demoContent from '@ecl/ec-specs-blockquote/demo/data';

import Blockquote from '../src/Blockquote';

storiesOf('Blockquote', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Blockquote
      author={text('Author', demoContent.author)}
      citation={text('Citation', demoContent.citation)}
    />
  ));
