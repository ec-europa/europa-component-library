import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import demoContent from '@ecl/ec-specs-blockquote/demo/data';

import Blockquote from '../src/Blockquote';

export default {
  title: 'Components/Blockquote',
  decorators: [withKnobs],
};

export const Default = () => (
  <Blockquote
    author={text('Author', demoContent.author)}
    citation={text('Citation', demoContent.citation)}
  />
);

Default.storyName = 'default';
