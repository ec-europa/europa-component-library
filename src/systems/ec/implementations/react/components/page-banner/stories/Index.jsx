/* eslint-disable import/no-extraneous-dependencies */
import { withKnobs } from '@storybook/addon-knobs';

export { Image } from './Image';
export { ImageShade } from './ImageShade';
export { SimplePrimary } from './SimplePrimary';
export { SimpleGrey } from './SimpleGrey';
export { SimpleWhite } from './SimpleWhite';
export { SimpleGhost } from './SimpleGhost';
export { SimpleGhostInvert } from './SimpleGhostInvert';

export default {
  title: 'Components/Banners/Page Banner',
  decorators: [withKnobs],
};
