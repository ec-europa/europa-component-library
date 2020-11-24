import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import HighlightExampleDefault from '../examples/Default';
import HighlightExampleImage from '../examples/Image';

export default {
  title: 'Templates/Compositions/Highlighted items',
  decorators: [withKnobs],
};

export const Default = () => <HighlightExampleDefault />;

Default.storyName = 'default';

export const Image = () => <HighlightExampleImage />;

Image.storyName = 'with image';
