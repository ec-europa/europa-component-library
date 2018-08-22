/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContentHorizontal from '@ecl/ec-specs-logo/demo/data--horizontal';
import demoContentMute from '@ecl/ec-specs-logo/demo/data--mute';

import logoHorizontal from '../resources/EC-logo-horizontal-desktop.svg';
import logoMute from '../resources/EC_logo-desktop.svg';

import Logo from '../Logo';
import './index.scss';

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('horizontal', () => (
    <Logo
      variant="horizontal"
      title={text('Title', demoContentHorizontal.title)}
      src={logoHorizontal}
    />
  ))
  .add('mute', () => (
    <Logo
      variant="mute"
      title={text('Title', demoContentMute.title)}
      src={logoMute}
    />
  ));
