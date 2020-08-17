import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ContentItemExampleDefault from '../examples/Default';
import ContentItemExampleSimple from '../examples/Simple';
import ContentItemExampleImageLeft from '../examples/ImageLeft';
import ContentItemExampleDate from '../examples/Date';
import ContentItemExampleCustom from '../examples/Custom';

export default {
  title: 'Templates/Compositions/Content items',
  decorators: [withKnobs],
};

export const Default = () => <ContentItemExampleDefault />;

Default.story = {
  name: 'default',
};

export const Simple = () => <ContentItemExampleSimple />;

Simple.story = {
  name: 'simple',
};

export const ImageOnLeft = () => <ContentItemExampleImageLeft />;

ImageOnLeft.story = {
  name: 'image on left',
};

export const WithDate = () => <ContentItemExampleDate />;

WithDate.story = {
  name: 'with date',
};

export const CustomContent = () => <ContentItemExampleCustom />;

CustomContent.story = {
  name: 'custom content',
};
