/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

const styleBox = {
  height: '5rem',
  margin: '2rem auto',
  width: '10rem',
};

storiesOf('Utilities|Border', module)
  .addDecorator(withKnobs)
  .add('custom', () => {
    const direction = select(
      'Direction',
      {
        All: 'ecl-u-border-all',
        Bottom: 'ecl-u-border-bottom',
        Left: 'ecl-u-border-left',
        Right: 'ecl-u-border-right',
        Top: 'ecl-u-border-top',
      },
      'ecl-u-border-all',
      'Container'
    );

    const color = select(
      'Color (sample)',
      {
        Black: 'ecl-u-border-color-black-100',
        Primary: 'ecl-u-border-color-primary',
        Secondary: 'ecl-u-border-color-secondary',
        'Grey 100': 'ecl-u-border-color-grey-100',
        'Grey 50': 'ecl-u-border-color-grey-50',
        'Grey 5': 'ecl-u-border-color-grey-5',
        Info: 'ecl-u-border-color-info',
        Success: 'ecl-u-border-color-success',
        Warning: 'ecl-u-border-color-warning',
        Error: 'ecl-u-border-color-error',
      },
      'ecl-u-border-color-black-100',
      'Container'
    );

    const width = select(
      'Width',
      {
        '1px': 'ecl-u-border-width-1',
        '2px': 'ecl-u-border-width-2',
        '4px': 'ecl-u-border-width-4',
        '8px': 'ecl-u-border-width-8',
      },
      'ecl-u-border-width-2',
      'Container'
    );

    return (
      <div style={styleBox} className={classnames(direction, color, width)} />
    );
  });
