/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

const styleContainer = {
  backgroundColor: '#d9d9d9',
  height: '10rem',
  width: '10rem',
};

const styleBox = {
  backgroundColor: '#ebebeb',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'inline-block',
};

storiesOf('Utilities|Dimension', module)
  .addDecorator(withKnobs)
  .add('custom', () => {
    const width = select(
      'Width',
      {
        Auto: 'ecl-u-width-auto',
        '100%': 'ecl-u-width-100',
      },
      'ecl-u-width-auto'
    );

    const height = select(
      'Height',
      {
        Auto: 'ecl-u-height-auto',
        '100%': 'ecl-u-height-100',
      },
      'ecl-u-height-auto'
    );

    return (
      <div style={styleContainer}>
        <div style={styleBox} className={classnames(width, height)}>
          Content box
        </div>
      </div>
    );
  });
