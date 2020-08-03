import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import HighlightExampleDefault from '../examples/Default';
import HighlightExampleImage from '../examples/Image';

export default {
  title: 'Templates/Compositions/Homepage highlight',
  decorators: [withKnobs],
};

export const Default = () => <HighlightExampleDefault />;

Default.story = {
  name: 'default',
};

export const Image = () => <HighlightExampleImage />;

Image.story = {
  name: 'with image',
};
