import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import HighlightExampleDefault from '../examples/Default';
import HighlightExampleImage from '../examples/Image';

export default {
  title: 'Templates/Compositions/Highlighted items',
  decorators: [withKnobs],
};

export function Default() {
  return <HighlightExampleDefault />;
}

Default.storyName = 'default';

export function Image() {
  return <HighlightExampleImage />;
}

Image.storyName = 'with image';
