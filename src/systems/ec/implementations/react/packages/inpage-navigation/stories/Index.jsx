/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import InpageNavigationExample from '../examples/Default';

storiesOf('Navigation/In page navigation', module).add('default', () => (
  <InpageNavigationExample />
));
