/* eslint-disable import/no-extraneous-dependencies */
import { withKnobs } from '@storybook/addon-knobs';

export { Image } from './Image';
export { ImageShade } from './ImageShade';
export { ImageGradient } from './ImageGradient';
export { SimplePrimary } from './SimplePrimary';
export { SimpleGrey } from './SimpleGrey';
export { SimpleWhite } from './SimpleWhite';

export default {
  title: 'Components/Banners/Hero Banner',
  decorators: [withKnobs],
};
