/* eslint-disable import/no-extraneous-dependencies */
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

Left.story = {
  name: 'left',
};

export const LeftCta = () => <ContentMediaExampleLeftCta />;

LeftCta.story = {
  name: 'left, call to action',
};

export const Right = () => <ContentMediaExampleRight />;

Right.story = {
  name: 'right',
};

export const RightCta = () => <ContentMediaExampleRightCta />;

RightCta.story = {
  name: 'right, call to action',
};
