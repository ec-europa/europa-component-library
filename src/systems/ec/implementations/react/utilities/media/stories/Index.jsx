/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const styleLine = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
  marginTop: '0.5rem',
};
const styleContainer = {
  display: 'flex',
  flexDirection: 'column',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
};
const styleContent = {
  backgroundImage:
    'url(https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg)',
  backgroundPosition: '50%',
  backgroundSize: 'cover',
  minHeight: '1rem',
  minWidth: '1rem',
};

const Media = (type, token) => (
  <div style={styleLine}>
    <div style={styleContainer}>
      <img
        src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        alt="example"
        className={`ecl-u-media-${type}-${token}`}
      />
      ecl-u-media-{type}-{token}
    </div>

    <div style={styleContainer}>
      <div style={styleContent} className={`ecl-u-media-${type}-${token}`} />
      ecl-u-media-{type}-{token}
    </div>
  </div>
);

storiesOf('Utilities|Media', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Fragment>
        <h2 className="ecl-u-type-heading-2">Media sizes</h2>
        {Media('a', 's')}
        {Media('a', 'm')}

        <h2 className="ecl-u-type-heading-2">Media sizes (horizontal only)</h2>
        {Media('h', 's')}
        {Media('h', 'm')}

        <h2 className="ecl-u-type-heading-2">Media sizes (vertical only)</h2>
        {Media('v', 's')}
        {Media('v', 'm')}
      </Fragment>
    );
  });
