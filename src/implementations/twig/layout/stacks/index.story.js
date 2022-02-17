import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const getArgs = (fixed) => ({
  direction: fixed ? 'column' : 'row',
  wrap: 'wrap',
  alignItems: 'start',
  alignContent: 'start',
  justifyContent: 'start',
  shrink: false,
  grow: false,
  fixedContainer: !!fixed,
  containerWidth: 25,
  containerHeight: 25,
});

const getArgTypes = () => ({
  direction: {
    type: 'select',
    description: 'Choose different flex-direction values',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
    table: {
      category: 'Container',
    },
  },
  wrap: {
    description: 'Choose different flex-wrap values',
    type: 'select',
    options: ['wrap', 'nowrap', 'wrap-reverse'],
    table: {
      category: 'Container',
    },
  },
  alignItems: {
    name: 'align items',
    description: 'Choose different flex-align values',
    type: 'select',
    options: ['start', 'end', 'center', 'baseline', 'stretch'],
    table: {
      category: 'Container',
    },
  },
  alignContent: {
    name: 'align content',
    description: 'Choose different align content values',
    type: 'select',
    options: ['start', 'end', 'center', 'between', 'around', 'stretch'],
    control: {
      labels: {
        start: 'Start',
        end: 'End',
        center: 'Center',
        between: 'Space between',
        around: 'Space around',
        stretch: 'Stretch',
      },
    },
    table: {
      category: 'Container',
    },
  },
  justifyContent: {
    name: 'justify content',
    description: 'Choose different justify-content values',
    type: 'select',
    options: ['start', 'end', 'center', 'between', 'around'],
    control: {
      labels: {
        start: 'Start',
        end: 'End',
        center: 'Center',
        between: 'Space between',
        around: 'Space around',
      },
    },
    table: {
      category: 'Container',
    },
  },
  shrink: {
    type: 'boolean',
    description: 'Flex-shrink',
    table: {
      category: 'Items',
    },
  },
  grow: {
    description: 'Flex-grow',
    type: 'boolean',
    control: {
      type: 'boolean',
    },
    table: {
      category: 'Items',
    },
  },
  fixedContainer: {
    name: 'test with a fixed container',
    description:
      'Following width and height values will be taken into account if activated',
    type: 'boolean',
    control: {
      type: 'boolean',
    },
    table: {
      category: 'Fixed container',
    },
  },
  containerWidth: {
    name: 'container width (rem)',
    description: 'Fixed container width',
    control: {
      type: 'range',
      min: 15,
      max: 35,
      step: 1,
    },
    table: {
      category: 'Fixed container',
    },
  },
  containerHeight: {
    name: 'container height (rem)',
    description: 'Fixed container height',
    control: {
      type: 'range',
      min: 15,
      max: 35,
      step: 1,
    },
    table: {
      category: 'Fixed container',
    },
  },
});

const Box = ({ align, width, shrink, grow, contents }) => `
  <div
    class="${classnames('ecl-u-bg-primary ecl-u-color-white', {
      [`ecl-u-flex-shrink-${shrink ? '1' : '0'}`]: true,
      [`ecl-u-flex-grow-${grow ? '1' : '0'}`]: true,
    })}"
    style="${styled({
      boxSizing: 'border-box',
      border: '1px solid #9F9F9F',
      display: 'flex',
      justifyContent: align || 'center',
      alignItems: 'center',
      minHeight: width || '2rem',
      width: width || 'auto',
    })}"
  >
    ${contents}
  </div>
`;

export default {
  title: 'Layout/Stacks',
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const Column = (args) => {
  const { shrink } = args;
  const { grow } = args;

  return `
    <div
      class="${classnames(
        'ecl-u-d-flex',
        `ecl-u-flex-column`,
        `ecl-u-flex-wrap`,
        {
          [`ecl-u-align-items-${args.alignItems}`]: true,
          [`ecl-u-align-content-${args.alignContent}`]: true,
          [`ecl-u-justify-content-${args.justifyContent}`]: true,
        }
      )}"
      style="${styled({
        maxWidth: `${args.containerWidth}rem`,
        maxHeight: `${args.containerHeight}rem`,
        backgroundColor: '#F2F5F9',
        border: '2px solid #404040',
        boxSizing: 'border-box',
        color: 'white',
      })}"
    >
      ${Box({ align: 'start', shrink, grow, contents: 'Aaaaaaaaaaaa' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Bbbbbbbbbbb' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Cccc' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Dddddddd ddddd' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Eeeeee' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Ffff fff' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Ggggggggggggggg' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Hhhhh' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Ii' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Lllllllll' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Mmmmmm mmmmm' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Nnnnnnnnnn' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Ooooo ooo' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Ppppppppp ppppppp' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Qqqqq qq' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Rrrrr rrrrrrrr' })}
      ${Box({ align: 'start', shrink, grow, contents: 'Sss sss' })}
    </div>
  `;
};

export const Custom = (args) => {
  const { shrink } = args;
  const { grow } = args;

  return `
    <div
      class="${classnames('ecl-u-d-flex', {
        [`ecl-u-flex-${args.direction}`]: true,
        [`ecl-u-flex-${args.wrap}`]: true,
        [`ecl-u-align-items-${args.alignItems}`]: true,
        [`ecl-u-align-content-${args.alignContent}`]: true,
        [`ecl-u-justify-content-${args.justifyContent}`]: true,
      })}"
      style="${styled({
        ...(args.fixedContainer && {
          width: `${args.containerWidth}rem`,
          height: `${args.containerHeight}rem`,
        }),

        backgroundColor: '#F2F5F9',
        border: '2px solid #404040',
        boxSizing: 'border-box',
      })}"
    >
      ${Box({ align: 'center', width: '5rem', shrink, grow, contents: '1' })}
      ${Box({ align: 'center', width: '3rem', shrink, grow, contents: '2' })}
      ${Box({ align: 'center', width: '3rem', shrink, grow, contents: '3' })}
      ${Box({ align: 'center', width: '5rem', shrink, grow, contents: '4' })}
      ${Box({ align: 'center', width: '4rem', shrink, grow, contents: '5' })}
      ${Box({ align: 'center', width: '5rem', shrink, grow, contents: '6' })}
      ${Box({ align: 'center', width: '4rem', shrink, grow, contents: '7' })}
      ${Box({ align: 'center', width: '5rem', shrink, grow, contents: '8' })}
      ${Box({ align: 'center', width: '6rem', shrink, grow, contents: '9' })}
      ${Box({ align: 'center', width: '4rem', shrink, grow, contents: '10' })}
      ${Box({ walign: 'center', width: '17rem', shrink, grow, contents: '11' })}
      ${Box({ align: 'center', width: '4rem', shrink, grow, contents: '12' })}
    </div>
  `;
};

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();

Column.storyName = 'sorting by column';
Column.args = getArgs('fixed');
Column.argTypes = getArgTypes();
