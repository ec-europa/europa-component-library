import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';

const getArgTypes = () => {
  return {
    bgPosition: {
      name: 'background position',
      description: 'Choose different background position values',
      type: 'select',
      defaultValue: 'ecl-u-media-bg-position-initial',
      control: {
        type: 'select',
        options: {
          Initial: 'ecl-u-media-bg-position-initial',
          Top: 'ecl-u-media-bg-position-top',
          Bottom: 'ecl-u-media-bg-position-bottom',
          Left: 'ecl-u-media-bg-position-left',
          Right: 'ecl-u-media-bg-position-right',
          Center: 'ecl-u-media-bg-position-center',
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
      defaultValue: 'ecl-u-media-bg-origin-padding',
      control: {
        type: 'select',
        options: {
          Padding: 'ecl-u-media-bg-origin-padding',
          Border: 'ecl-u-media-bg-origin-border',
          Content: 'ecl-u-media-bg-origin-content',
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
      defaultValue: 'ecl-u-media-bg-repeat-none',
      description: 'Choose different bacground-repeat values',
      control: {
        type: 'select',
        options: {
          'No repeat': 'ecl-u-media-bg-repeat-none',
          Repeat: 'ecl-u-media-bg-repeat-all',
          'Repeat-x': 'ecl-u-media-bg-repeat-x',
          'Repeat-y': 'ecl-u-media-bg-repeat-y',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    bgSize: {
      name: 'background size',
      description: 'Choose different background-size values',
      defaultValue: 'ecl-u-media-bg-size-contain',
      control: {
        type: 'select',
        options: {
          Contain: 'ecl-u-media-bg-size-contain',
          Cover: 'ecl-u-media-bg-size-cover',
          Auto: 'ecl-u-media-bg-size-auto',
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
      defaultValue: '16-9',
      control: {
        type: 'select',
        options: {
          '16-9': '16-9',
          '4-3': '4-3',
          '3-2': '3-2',
          '1-1': '1-1',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    direction: {
      name: 'size direction',
      type: 'select',
      description: 'Choose different size directions',
      defaultValue: 'a',
      control: {
        type: 'select',
        options: {
          All: 'a',
          Horizontal: 'h',
          Vertical: 'v',
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
      defaultValue: 'm',
      control: {
        type: 'select',
        options: {
          S: 's',
          M: 'm',
        },
      },
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
    knobs: { disable: true },
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
Custom.argTypes = getArgTypes();
