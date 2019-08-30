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
const styleContainerLeft = {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
};
const styleContainerRight = {
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
};
const styleContent = {
  backgroundImage:
    'url(https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg)',
  backgroundPosition: '50%',
  backgroundSize: 'cover',
  minHeight: '1rem',
  minWidth: '1rem',
};

const Media = (type, token) => (
  <div style={styleLine}>
    <div style={styleContainerLeft}>
      <img
        src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
        alt="example"
        className={`ecl-u-media-${type}-${token}`}
      />
      ecl-u-media-{type}-{token}
    </div>

    <div style={styleContainerRight}>
      <div style={styleContent} className={`ecl-u-media-${type}-${token}`} />
      ecl-u-media-{type}-{token}
    </div>
  </div>
);

const MediaRatio = (type, token, ratio) => (
  <div style={styleLine}>
    <div style={styleContainerLeft}>
      <div
        className={`ecl-u-media-ratio-${ratio} ecl-u-media-${type}-${token}`}
      >
        <img
          src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
          alt="example"
          className="ecl-u-media-content"
        />
      </div>
      ecl-u-media-ratio-{ratio}
    </div>

    <div style={styleContainerRight}>
      <div
        className={`ecl-u-media-ratio-${ratio} ecl-u-media-${type}-${token}`}
      >
        <div style={styleContent} className="ecl-u-media-content" />
      </div>
      ecl-u-media-ratio-{ratio}
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

        <h2 className="ecl-u-type-heading-2">Media ratio</h2>
        {MediaRatio('h', 'm', '16-9')}
        {MediaRatio('h', 'm', '4-3')}
        {MediaRatio('h', 'm', '3-2')}
        {MediaRatio('h', 'm', '1-1')}
      </Fragment>
    );
  });
