/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

const styleBox = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Arial,sans-serif',
  fontSize: '1rem',
  justifyContent: 'center',
  padding: '1rem',
};

storiesOf('Utilities|Color', module)
  .addDecorator(withKnobs)
  .add('custom', () => {
    const color = select(
      'Text color (sample)',
      {
        Black: 'ecl-u-color-black-100',
        Primary: 'ecl-u-color-primary',
        Shade: 'ecl-u-color-shade',
        'Grey 50': 'ecl-u-color-grey-50',
        'Blue 120': 'ecl-u-color-blue-120',
        Success: 'ecl-u-color-success',
        Error: 'ecl-u-color-error',
        White: 'ecl-u-color-white-100',
      },
      'ecl-u-border-color-black-100'
    );

    const background = select(
      'Background color (sample)',
      {
        White: 'ecl-u-bg-default',
        Primary: 'ecl-u-bg-primary',
        Secondary: 'ecl-u-bg-secondary',
        Shade: 'ecl-u-bg-shade',
      },
      'ecl-u-border-bg-default'
    );

    return (
      <div style={styleBox} className={classnames(color, background)}>
        Sample text regular
        <br />
        <strong>Sample text bold</strong>
      </div>
    );
  });
