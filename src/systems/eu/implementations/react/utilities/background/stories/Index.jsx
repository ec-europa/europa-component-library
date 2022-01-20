import React from 'react';
import classnames from 'classnames';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Utilities/Background',
  decorators: [withKnobs],
};

export function Custom() {
  const background = select(
    'Background colour (sample)',
    {
      White: 'ecl-u-bg-white',
      Blue: 'ecl-u-bg-blue ecl-u-type-color-white',
      Yellow: 'ecl-u-bg-yellow',
      Grey: 'ecl-u-bg-grey ecl-u-type-color-white',
      'Grey 25': 'ecl-u-bg-grey-25',
    },
    'ecl-u-bg-white'
  );

  return (
    <p className={classnames('ecl-u-type-paragraph', background)}>
      Sample text regular
      <br />
      <strong>Sample text bold</strong>
    </p>
  );
}

Custom.storyName = 'custom';
