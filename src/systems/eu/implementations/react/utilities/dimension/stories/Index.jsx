import React from 'react';
import classnames from 'classnames';
import { withKnobs, select } from '@storybook/addon-knobs';

const styleContainer = {
  backgroundColor: '#d9d9d9',
  border: '2px dashed #404040',
  height: '10rem',
  width: '10rem',
};

const styleBox = {
  backgroundColor: '#ebebeb',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'inline-block',
};

const styleImage = {
  width: '12rem',
  height: '12rem',
};

export default {
  title: 'Utilities/Dimension',
  decorators: [withKnobs],
};

export function Custom() {
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

  const maxWidth = select(
    'Max width',
    {
      None: 'ecl-u-max-width-none',
      '100%': 'ecl-u-max-width-100',
    },
    'ecl-u-max-width-none'
  );

  const maxHeight = select(
    'Max height',
    {
      None: 'ecl-u-max-height-none',
      '100%': 'ecl-u-max-height-100',
    },
    'ecl-u-max-height-none'
  );

  return (
    <>
      <div style={styleContainer}>
        <div style={styleBox} className={classnames(width, height)}>
          Content box
        </div>
      </div>
      <div style={styleContainer} className="ecl-u-mt-m">
        <img
          src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg"
          alt="example"
          style={styleImage}
          className={classnames(maxWidth, maxHeight)}
        />
      </div>
    </>
  );
}

Custom.storyName = 'custom';
