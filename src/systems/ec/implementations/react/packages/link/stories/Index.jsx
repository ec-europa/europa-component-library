/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-link/demo/data--default';
import demoContentStandalone from '@ecl/ec-specs-link/demo/data--standalone';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

import Link from '../Link';

const icons = {
  none: '',
  ...uiIcons
    .map(icon => ({ [`${icon}`]: `ui--${icon}` }))
    .reduce((a, b) => ({
      ...a,
      ...b,
    })),
};

const iconPosition = {
  before: 'before',
  after: 'after',
};

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const linkIcon = {
      shape: select('Icon (sample)', icons, ''),
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
      shape: select('Icon (sample)', icons, ''),
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
