/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContentDefault from '@ecl/ec-specs-link/demo/data--default';
import demoContentStandalone from '@ecl/ec-specs-link/demo/data--standalone';

import Link from '../Link';
import './index.scss';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Link
      variant="default"
      href="http://example.com"
      label={text('Label', demoContentDefault.label)}
    />
  ))
  .add('standalone', () => (
    <Link
      variant="standalone"
      href="http://example.com"
      label={text('Label', demoContentStandalone.label)}
    />
  ));
