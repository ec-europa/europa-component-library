/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  optionsKnob as options,
  boolean,
} from '@storybook/addon-knobs';

const styleBox = {
  height: '5rem',
  margin: '2rem auto',
  width: '10rem',
};

storiesOf('Utilities|Border', module)
  .addDecorator(withKnobs)
  .add('custom', () => {
    const color = select(
      'Color (sample)',
      {
        Black: 'ecl-u-border-color-black',
        Blue: 'ecl-u-border-color-blue',
        Yellow: 'ecl-u-border-color-yellow',
        Grey: 'ecl-u-border-color-grey',
        'Grey 50': 'ecl-u-border-color-grey-50',
        'Grey 5': 'ecl-u-border-color-grey-5',
        'Blue N': 'ecl-u-border-color-blue-n',
        'Red 100': 'ecl-u-border-color-red-100',
      },
      'ecl-u-border-color-black'
    );

    const width = select(
      'Width',
      {
        '1px': 'ecl-u-border-width-1',
        '2px': 'ecl-u-border-width-2',
        '4px': 'ecl-u-border-width-4',
        '8px': 'ecl-u-border-width-8',
      },
      'ecl-u-border-width-2'
    );

    const individualBorders = boolean('Control borders individually?', false);
    let direction = 'ecl-u-border-all';
    if (individualBorders) {
      direction = options(
        'Direction',
        {
          Bottom: 'ecl-u-border-bottom',
          Left: 'ecl-u-border-left',
          Right: 'ecl-u-border-right',
          Top: 'ecl-u-border-top',
        },
        'ecl-u-border-all',
        {
          display: 'multi-select',
        }
      );
    }

    return (
      <div style={styleBox} className={classnames(direction, color, width)} />
    );
  });
