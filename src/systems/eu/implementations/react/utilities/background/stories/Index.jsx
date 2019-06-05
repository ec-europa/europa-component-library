/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Utilities|Background', module)
  .addDecorator(withKnobs)
  .add('custom', () => {
    const background = select(
      'Background colour (sample)',
      {
        Default: 'ecl-u-bg-default',
        Primary: 'ecl-u-bg-primary ecl-u-type-colour-white-100',
        Secondary: 'ecl-u-bg-secondary',
        Shade: 'ecl-u-bg-shade ecl-u-type-colour-white-100',
      },
      'ecl-u-bg-default'
    );

    return (
      <p className={classnames('ecl-u-type-paragraph', background)}>
        Sample text regular
        <br />
        <strong>Sample text bold</strong>
      </p>
    );
  });
