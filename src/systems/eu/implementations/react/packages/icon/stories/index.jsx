/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, selectV2 } from '@storybook/addon-knobs/react';

import svgSprite from '@ecl/eu-resources-icons/dist/icons.svg';

import demoContentAudio from '@ecl/eu-specs-icon/demo/data--audio';

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

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Icon
      variant=""
      size={selectV2('Size', sizes, defaultSize)}
      iconPath={svgSprite}
      icon={demoContentAudio.icon}
    />
  ))
  .add('highlight', () => (
    <Icon
      variant="highlight"
      size={selectV2('Size', sizes, defaultSize)}
      iconPath={svgSprite}
      icon={demoContentAudio.icon}
    />
  ));
