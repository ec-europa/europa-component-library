/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import demoContentDefault from '@ecl/eu-specs-link/demo/data--default';
import demoContentStandalone from '@ecl/eu-specs-link/demo/data--standalone';

import Link from '../Link';

const icons = {
  none: '',
  arrow: 'Icon_Corner-arrow-right',
  external: 'Icon_External',
};

const iconPosition = {
  before: 'before',
  after: 'after',
};

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const linkIcon = {
      icon: select('Icon (sample)', icons, ''),
      size: 'fluid',
    };

    return (
      <Link
        variant="default"
        href="/example#default-link"
        label={text('Label', demoContentDefault.label)}
        icon={linkIcon}
        iconPosition={select('Icon position', iconPosition, 'after')}
      />
    );
  })
  .add('standalone', () => {
    const linkIcon = {
      icon: select('Icon (sample)', icons, ''),
      size: 'fluid',
    };

    return (
      <Link
        variant="standalone"
        href="/example#standalone-link"
        label={text('Label', demoContentStandalone.label)}
        icon={linkIcon}
        iconPosition={select('Icon position', iconPosition, 'after')}
      />
    );
  });
