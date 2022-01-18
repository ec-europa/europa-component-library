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

export function Left() {
  return <ContentMediaExampleLeft />;
}

Left.storyName = 'left';

export function LeftCta() {
  return <ContentMediaExampleLeftCta />;
}

LeftCta.storyName = 'left, call to action';

export function Right() {
  return <ContentMediaExampleRight />;
}

Right.storyName = 'right';

export function RightCta() {
  return <ContentMediaExampleRightCta />;
}

RightCta.storyName = 'right, call to action';
