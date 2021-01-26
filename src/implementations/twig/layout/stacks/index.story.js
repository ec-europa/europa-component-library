import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const getArgTypes = () => {
  return {
    direction: {
      type: 'select',
      description: 'Choose different flex-direction values',
      defaultValue: 'row',
      control: {
        type: 'select',
        options: {
          Row: 'row',
          'Row reverse': 'row-reverse',
          Column: 'column',
          'Column reverse': 'column-reverse',
        },
      },
      table: {
        category: 'Container',
      },
    },
    wrap: {
      description: 'Choose different flex-wrap values',
      defaultValue: 'wrap',
      type: 'select',
      control: {
        type: 'select',
        options: {
          Wrap: 'wrap',
          'No wrap': 'nowrap',
          'Wrap reverse': 'wrap-reverse',
        },
      },
      table: {
        category: 'Container',
      },
    },
    alignItems: {
      name: 'align items',
      description: 'Choose different flex-align values',
      defaultValue: 'start',
      type: 'select',
      control: {
        type: 'select',
        options: {
          Start: 'start',
          End: 'end',
          Center: 'center',
          Baseline: 'baseline',
          Stretch: 'stretch',
        },
      },
      table: {
        category: 'Container',
      },
    },
    alignContent: {
      name: 'align content',
      description: 'Choose different align content values',
      defaultValue: 'start',
      type: 'select',
      control: {
        type: 'select',
        options: {
          Start: 'start',
          End: 'end',
          Center: 'center',
          'Space between': 'between',
          'Space around': 'around',
          Stretch: 'stretch',
        },
      },
      table: {
        category: 'Container',
      },
    },
    justifyContent: {
      name: 'justify content',
      description: 'Choose different justify-content values',
      defaultValue: 'start',
      type: 'select',
      control: {
        type: 'select',
        options: {
          Start: 'start',
          End: 'end',
          Center: 'center',
          'Space between': 'between',
          'Space around': 'around',
        },
      },
      table: {
        category: 'Container',
      },
    },
    shrink: {
      type: 'boolean',
      description: 'Flex-shrink',
      defaultValue: false,
      table: {
        category: 'Items',
      },
    },
    grow: {
      description: 'Flex-grow',
      defaultValue: false,
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
      defaultValue: false,
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
      defaultValue: 25,
      type: 'number',
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
      defaultValue: 25,
      type: 'number',
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
  };
};

const Box = ({ width, shrink, grow, contents }) => `
  <div
    class="${classnames('ecl-u-bg-primary ecl-u-color-white', {
      [`ecl-u-flex-shrink-${shrink ? '1' : '0'}`]: true,
      [`ecl-u-flex-grow-${grow ? '1' : '0'}`]: true,
    })}"
    style="${styled({
      boxSizing: 'border-box',
      border: '1px solid #9F9F9F',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: width || '2rem',
      width: width || '2rem',
    })}"
  >
    ${contents}
  </div>
`;

export default {
  title: 'Layout/Stacks',
  decorators: [withCode],
  parameters: {
    knobs: { disable: true },
    a11y: { disable: true },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
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
      ${Box({ width: '5rem', shrink, grow, contents: '1' })}
      ${Box({ width: '3rem', shrink, grow, contents: '2' })}
      ${Box({ width: '3rem', shrink, grow, contents: '3' })}
      ${Box({ width: '5rem', shrink, grow, contents: '4' })}
      ${Box({ width: '4rem', shrink, grow, contents: '5' })}
      ${Box({ width: '5rem', shrink, grow, contents: '6' })}
      ${Box({ width: '4rem', shrink, grow, contents: '7' })}
      ${Box({ width: '5rem', shrink, grow, contents: '8' })}
      ${Box({ width: '6rem', shrink, grow, contents: '9' })}
      ${Box({ width: '4rem', shrink, grow, contents: '10' })}
      ${Box({ width: '17rem', shrink, grow, contents: '11' })}
      ${Box({ width: '4rem', shrink, grow, contents: '12' })}
    </div>
  `;
};

Custom.storyName = 'custom';
Custom.argTypes = getArgTypes();
