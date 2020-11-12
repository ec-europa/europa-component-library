import classnames from 'classnames';
import { withKnobs, select } from '@storybook/addon-knobs';
import { styled } from '@ecl/dom-utils';

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

const Media = (type, token) => `
  <div style="${styled(styleLine)}">
    <div style="${styled(styleContainerLeft)}">
      <img
        src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
        alt="example"
        class="${`ecl-u-media-${type}-${token}`}"
      />
      ecl-u-media-${type}-${token}
    </div>

    <div style="${styled(styleContainerRight)}">
      <div style="${styled(
        styleContent
      )}" class="${`ecl-u-media-${type}-${token}`}">
      </div>
      ecl-u-media-${type}-${token}
    </div>
  </div>
`;

const MediaRatio = (type, token, ratio) => `
  <div style="${styled(styleLine)}">
    <div style="${styled(styleContainerLeft)}">
      <div
        class="${`ecl-u-media-ratio-${ratio} ecl-u-media-${type}-${token}`}"
      >
        <img
          src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
          alt="example"
          class="ecl-u-media-content"
        />
      </div>
      ecl-u-media-ratio-${ratio}
    </div>

    <div style="${styled(styleContainerRight)}">
      <div
        class="${`ecl-u-media-ratio-${ratio} ecl-u-media-${type}-${token}`}"
      >
        <div style="${styled(styleContent)}" class="ecl-u-media-content"></div>
      </div>
      ecl-u-media-ratio-${ratio}
    </div>
  </div>
`;

const MediaBg = (bgPosition, bgOrigin, bgRepeat, bgSize) => `
  <div
    style="${styled(styleBg)}"
    class="${classnames(
      'ecl-u-media-a-m',
      bgPosition,
      bgOrigin,
      bgRepeat,
      bgSize
    )}"
  />
`;

export default {
  title: 'Utilities/Media',
  decorators: [withKnobs],
};

export const Custom = () => {
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

  return `
    <h2 class="ecl-u-type-heading-2">Media sizes</h2>
    ${Media(direction, size)}

    <h2 class="ecl-u-type-heading-2">
      Media ratio (only with horizontal size)
    </h2>
    ${MediaRatio('h', size, ratio)}

    <h2 class="ecl-u-type-heading-2">Background media</h2>
    ${MediaBg(bgPosition, bgOrigin, bgRepeat, bgSize)}
  `;
};

Custom.storyName = 'custom';
