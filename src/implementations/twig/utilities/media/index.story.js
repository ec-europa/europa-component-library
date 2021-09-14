import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';

const getArgs = () => {
  return {
    bgPosition: 'ecl-u-media-bg-position-initial',
    bgOrigin: 'ecl-u-media-bg-origin-padding',
    bgRepeat: 'ecl-u-media-bg-repeat-none',
    bgSize: 'ecl-u-media-bg-size-contain',
    ratio: '16-9',
    direction: 'a',
    size: 'm',
  };
};

const getArgTypes = () => {
  return {
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
          'ecl-u-media-bg-position-initial': 'Initial',
          'ecl-u-media-bg-position-top': 'Top',
          'ecl-u-media-bg-position-bottom': 'Bottom',
          'ecl-u-media-bg-position-left': 'Left',
          'ecl-u-media-bg-position-right': 'Right',
          'ecl-u-media-bg-position-center': 'Center',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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
          'ecl-u-media-bg-origin-padding': 'Padding',
          'ecl-u-media-bg-origin-border': 'Border',
          'ecl-u-media-bg-origin-content': 'Content',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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
          'ecl-u-media-bg-repeat-none': 'No repeat',
          'ecl-u-media-bg-repeat-all': 'Repeat',
          'ecl-u-media-bg-repeat-x': 'Repeat-x',
          'ecl-u-media-bg-repeat-y': 'Repeat-y',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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
          'ecl-u-media-bg-size-contain': 'Contain',
          'ecl-u-media-bg-size-cover': 'Cover',
          'ecl-u-media-bg-size-auto': 'Auto',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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
      },
    },
    direction: {
      name: 'size direction',
      type: 'select',
      description: 'Choose different size directions',
      options: ['a', 'h', 'v'],
      control: {
        labels: {
          a: 'All',
          h: 'Horizontal',
          v: 'Vertical',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      type: 'select',
      description: 'Choose different sizes',
      options: ['s', 'm'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  };
};

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
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
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
