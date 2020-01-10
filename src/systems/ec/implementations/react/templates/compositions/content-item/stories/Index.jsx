/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ContentItemExampleDefault from '../examples/Default';
import ContentItemExampleSimple from '../examples/Simple';
import ContentItemExampleImageLeft from '../examples/ImageLeft';
import ContentItemExampleDate from '../examples/Date';
import ContentItemExampleCustom from '../examples/Custom';

storiesOf('Templates|Compositions/Content items', module)
  .addDecorator(withKnobs)
  .add('default', () => <ContentItemExampleDefault />)
  .add('simple', () => <ContentItemExampleSimple />)
  .add('image on left', () => <ContentItemExampleImageLeft />)
  .add('with date', () => <ContentItemExampleDate />)
  .add('custom content', () => <ContentItemExampleCustom />);
