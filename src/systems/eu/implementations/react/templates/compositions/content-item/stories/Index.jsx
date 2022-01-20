import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ContentItemExampleDefault from '../examples/Default';
import ContentItemExampleTaxonomy from '../examples/Taxonomy';
import ContentItemExampleSimple from '../examples/Simple';
import ContentItemExampleImageLeft from '../examples/ImageLeft';
import ContentItemExampleDate from '../examples/Date';
import ContentItemExampleCustom from '../examples/Custom';

export default {
  title: 'Templates/Compositions/Content items',
  decorators: [withKnobs],
};

export function Default() {
  return <ContentItemExampleDefault />;
}

Default.storyName = 'default';

export function Taxonomy() {
  return <ContentItemExampleTaxonomy />;
}

Taxonomy.storyName = 'taxonomy';

export function Simple() {
  return <ContentItemExampleSimple />;
}

Simple.storyName = 'simple';

export function ImageOnLeft() {
  return <ContentItemExampleImageLeft />;
}

ImageOnLeft.storyName = 'image on left';

export function WithDate() {
  return <ContentItemExampleDate />;
}

WithDate.storyName = 'with date';

export function CustomContent() {
  return <ContentItemExampleCustom />;
}

CustomContent.storyName = 'custom content';
