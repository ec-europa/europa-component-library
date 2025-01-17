import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';

const getArgs = () => ({
  size: 'm',
  direction: 'a',
  ratio: '16-9',
  bgPosition: 'ecl-u-media-bg-position-initial',
  bgOrigin: 'ecl-u-media-bg-origin-padding',
  bgRepeat: 'ecl-u-media-bg-repeat-none',
  bgSize: 'ecl-u-media-bg-size-contain',
});

const getArgTypes = () => ({
  size: {
    type: 'select',
    description: 'Choose different sizes',
    options: ['s', 'm'],
    control: {
      labels: {
        s: 'small',
        m: 'medium',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Media sizes',
    },
    mapping: {
      small: 's',
      medium: 'm',
    },
  },
  direction: {
    name: 'size direction',
    type: 'select',
    description: 'Choose different size directions',
    options: ['a', 'h', 'v'],
    control: {
      labels: {
        a: 'all',
        h: 'horizontal',
        v: 'vertical',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Media sizes',
    },
    mapping: {
      all: 'a',
      horizontal: 'h',
      vertical: 'v',
    },
  },
  ratio: {
    name: 'ratio',
    description: 'Choose different Ratio for the media',
    type: 'select',
    options: ['16-9', '4-3', '3-2', '1-1'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Media ratio',
    },
    mapping: {
      '16-9': '16-9',
      '4-3': '4-3',
      '3-2': '3-2',
      '1-1': '1-1',
    },
  },
  bgPosition: {
    name: 'background position',
    description: 'Choose different background position values',
    type: 'select',
    options: [
      'ecl-u-media-bg-position-initial',
      'ecl-u-media-bg-position-top',
      'ecl-u-media-bg-position-bottom',
      'ecl-u-media-bg-position-left',
      'ecl-u-media-bg-position-right',
      'ecl-u-media-bg-position-center',
    ],
    control: {
      labels: {
        'ecl-u-media-bg-position-initial': 'initial',
        'ecl-u-media-bg-position-top': 'top',
        'ecl-u-media-bg-position-bottom': 'bottom',
        'ecl-u-media-bg-position-left': 'left',
        'ecl-u-media-bg-position-right': 'right',
        'ecl-u-media-bg-position-center': 'center',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Background media',
    },
    mapping: {
      initial: 'ecl-u-media-bg-position-initial',
      top: 'ecl-u-media-bg-position-top',
      bottom: 'ecl-u-media-bg-position-bottom',
      left: 'ecl-u-media-bg-position-left',
      right: 'ecl-u-media-bg-position-right',
      center: 'ecl-u-media-bg-position-center',
    },
  },
  bgOrigin: {
    name: 'background origin',
    description: 'Choose different background origin values',
    type: 'select',
    options: [
      'ecl-u-media-bg-origin-padding',
      'ecl-u-media-bg-origin-border',
      'ecl-u-media-bg-origin-content',
    ],
    control: {
      labels: {
        'ecl-u-media-bg-origin-padding': 'padding',
        'ecl-u-media-bg-origin-border': 'border',
        'ecl-u-media-bg-origin-content': 'content',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Background media',
    },
    mapping: {
      padding: 'ecl-u-media-bg-origin-padding',
      border: 'ecl-u-media-bg-origin-border',
      content: 'ecl-u-media-bg-origin-content',
    },
  },
  bgRepeat: {
    name: 'background repeat',
    type: 'select',
    description: 'Choose different bacground-repeat values',
    options: [
      'ecl-u-media-bg-repeat-none',
      'ecl-u-media-bg-repeat-all',
      'ecl-u-media-bg-repeat-x',
      'ecl-u-media-bg-repeat-y',
    ],
    control: {
      type: 'select',
      labels: {
        'ecl-u-media-bg-repeat-none': 'no repeat',
        'ecl-u-media-bg-repeat-all': 'repeat',
        'ecl-u-media-bg-repeat-x': 'repeat-x',
        'ecl-u-media-bg-repeat-y': 'repeat-y',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Background media',
    },
    mapping: {
      'no repeat': 'ecl-u-media-bg-repeat-none',
      repeat: 'ecl-u-media-bg-repeat-all',
      'repeat-x': 'ecl-u-media-bg-repeat-x',
      'repeat-y': 'ecl-u-media-bg-repeat-y',
    },
  },
  bgSize: {
    name: 'background size',
    type: 'select',
    description: 'Choose different background-size values',
    options: [
      'ecl-u-media-bg-size-contain',
      'ecl-u-media-bg-size-cover',
      'ecl-u-media-bg-size-auto',
    ],
    control: {
      labels: {
        'ecl-u-media-bg-size-contain': 'contain',
        'ecl-u-media-bg-size-cover': 'cover',
        'ecl-u-media-bg-size-auto': 'auto',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Background media',
    },
    mapping: {
      contain: 'ecl-u-media-bg-size-contain',
      cover: 'ecl-u-media-bg-size-cover',
      auto: 'ecl-u-media-bg-size-auto',
    },
  },
});

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
        styleContent,
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
      bgSize,
    )}"
  />
`;

export default {
  title: 'Utilities/Media',
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
    EclNotes: { disable: true },
  },
};

export const Custom = (args) => `
    <h2 class="ecl-u-type-heading-2">Media sizes</h2>
    ${Media(args.direction, args.size)}

    <h2 class="ecl-u-type-heading-2">
      Media ratio (only with horizontal size)
    </h2>
    ${MediaRatio('h', args.size, args.ratio)}

    <h2 class="ecl-u-type-heading-2">Background media</h2>
    ${MediaBg(args.bgPosition, args.bgOrigin, args.bgRepeat, args.bgSize)}
  `;

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
