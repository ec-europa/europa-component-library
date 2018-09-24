/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-logo/demo/data';

import Logo from '../Logo';

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('default', () => <Logo title={text('Title', demoContent.title)} />);
