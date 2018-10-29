/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import demoContent from '@ecl/ec-specs-component_name/demo/data';

import Component_name from '../Component_name';

storiesOf('Component_name', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Component_name />
  ));
