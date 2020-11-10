import { withKnobs } from '@storybook/addon-knobs';

import example234612 from './examples/234612.html.twig';
import example642 from './examples/642.html.twig';
import example282 from './examples/282.html.twig';
import example336 from './examples/336.html.twig';
import offset from './examples/offset.html.twig';
import responsive from './examples/responsive.html.twig';

export default {
  title: 'Layout/Grid',
  decorators: [withKnobs],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const _234612 = () => example234612();
_234612.storyName = '2-3-4-6-12';

export const _642 = () => example642();
_642.storyName = '6-4-2';

export const _282 = () => example282();
_282.storyName = '2-8-2';

export const _336 = () => example336();
_336.storyName = '3-3-6';

export const _offset = () => offset();
_offset.storyName = 'offset';

export const _responsive = () => responsive();
_responsive.storyName = 'responsive';
