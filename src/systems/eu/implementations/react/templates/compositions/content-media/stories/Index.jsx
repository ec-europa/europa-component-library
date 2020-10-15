import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ContentMediaExampleLeft from '../examples/Left';
import ContentMediaExampleLeftCta from '../examples/LeftCta';
import ContentMediaExampleRight from '../examples/Right';
import ContentMediaExampleRightCta from '../examples/RightCta';

export default {
  title: 'Templates/Compositions/Content media',
  decorators: [withKnobs],
};

export const Left = () => <ContentMediaExampleLeft />;

Left.storyName = 'left';

export const LeftCta = () => <ContentMediaExampleLeftCta />;

LeftCta.storyName = 'left, call to action';

export const Right = () => <ContentMediaExampleRight />;

Right.storyName = 'right';

export const RightCta = () => <ContentMediaExampleRightCta />;

RightCta.storyName = 'right, call to action';
