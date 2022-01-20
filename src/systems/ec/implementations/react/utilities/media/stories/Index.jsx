import React from 'react';
import classnames from 'classnames';
import { withKnobs, select } from '@storybook/addon-knobs';

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
const styleBg = {
  backgroundImage:
    'url(https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg)',
  border: '5px dashed #FFD617',
  margin: '1rem',
  minHeight: '1rem',
  minWidth: '1rem',
  padding: '1rem',
};

function Media(type, token) {
  return (
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
}

function MediaRatio(type, token, ratio) {
  return (
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
}

function MediaBg(bgPosition, bgOrigin, bgRepeat, bgSize) {
  return (
    <div
      style={styleBg}
      className={classnames(
        'ecl-u-media-a-m',
        bgPosition,
        bgOrigin,
        bgRepeat,
        bgSize
      )}
    />
  );
}

export default {
  title: 'Utilities/Media',
  decorators: [withKnobs],
};

export function Custom() {
  const direction = select(
    'Size direction',
    {
      All: 'a',
      Horizontal: 'h',
      Vertical: 'v',
    },
    'a'
  );

  const size = select(
    'Size',
    {
      S: 's',
      M: 'm',
    },
    'm'
  );

  const ratio = select(
    'Ratio',
    {
      '16-9': '16-9',
      '4-3': '4-3',
      '3-2': '3-2',
      '1-1': '1-1',
    },
    '16-9'
  );

  const bgPosition = select(
    'Background position',
    {
      Initial: 'ecl-u-media-bg-position-initial',
      Top: 'ecl-u-media-bg-position-top',
      Bottom: 'ecl-u-media-bg-position-bottom',
      Left: 'ecl-u-media-bg-position-left',
      Right: 'ecl-u-media-bg-position-right',
      Center: 'ecl-u-media-bg-position-center',
    },
    'ecl-u-media-bg-position-initial'
  );

  const bgOrigin = select(
    'Background origin',
    {
      Padding: 'ecl-u-media-bg-origin-padding',
      Border: 'ecl-u-media-bg-origin-border',
      Content: 'ecl-u-media-bg-origin-content',
    },
    'ecl-u-media-bg-origin-padding'
  );

  const bgRepeat = select(
    'Background repeat',
    {
      'No repeat': 'ecl-u-media-bg-repeat-none',
      Repeat: 'ecl-u-media-bg-repeat-all',
      'Repeat-x': 'ecl-u-media-bg-repeat-x',
      'Repeat-y': 'ecl-u-media-bg-repeat-y',
    },
    'ecl-u-media-bg-repeat-none'
  );

  const bgSize = select(
    'Background size',
    {
      Contain: 'ecl-u-media-bg-size-contain',
      Cover: 'ecl-u-media-bg-size-cover',
      Auto: 'ecl-u-media-bg-size-auto',
    },
    'ecl-u-media-bg-size-contain'
  );

  return (
    <>
      <h2 className="ecl-u-type-heading-2">Media sizes</h2>
      {Media(direction, size)}

      <h2 className="ecl-u-type-heading-2">
        Media ratio (only with horizontal size)
      </h2>
      {MediaRatio('h', size, ratio)}

      <h2 className="ecl-u-type-heading-2">Background media</h2>
      {MediaBg(bgPosition, bgOrigin, bgRepeat, bgSize)}
    </>
  );
}

Custom.storyName = 'custom';
