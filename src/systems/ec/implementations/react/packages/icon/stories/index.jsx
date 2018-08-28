/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import svgSprite from '@ecl/ec-resources/icons/svgsprite.svg';

import demoContentFacebook from '@ecl/ec-specs-icon/demo/data--facebook';
import demoContentAudio from '@ecl/ec-specs-icon/demo/data--audio';

import Icon from '../Icon';
import './index.scss';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('facebook', () => (
    <Icon variant="" iconPath={svgSprite} icon={demoContentFacebook.icon} />
  ))
  .add('audio', () => (
    <Icon variant="" iconPath={svgSprite} icon={demoContentAudio.icon} />
  ));
