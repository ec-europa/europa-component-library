/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, selectV2 } from '@storybook/addon-knobs/react';

import Tag from '../Tag';
import './index.scss';

const variants = {
  Default: '',
  'Facet close': 'facet-close',
};

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .add('default', () => <Tag variant={selectV2('Variant', variants, '')} />);
