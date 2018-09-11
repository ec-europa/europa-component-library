/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, selectV2 } from '@storybook/addon-knobs/react';

import demoContentAudio from '@ecl/ec-specs-icon/demo/data--audio';

import Icon from '../Icon';
import './index.scss';

const sizes = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
};
const defaultSize = 'm';

const colors = {
  Default: '',
  Inverted: 'inverted',
  Primary: 'primary',
};
const defaultColor = '';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('general', () => {
    const variant = selectV2(
      'Variant',
      {
        Default: '',
        Highlight: 'highlight',
      },
      ''
    );

    const color = variant === '' ? selectV2('Color', colors, defaultColor) : '';

    return (
      <Icon
        size={selectV2('Size', sizes, defaultSize)}
        color={color}
        variant={variant}
        icon={demoContentAudio.icon}
        iconSet="general"
      />
    );
  });
