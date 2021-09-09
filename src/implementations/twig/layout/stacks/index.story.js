import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const getArgs = () => {
  return {
    direction: 'row',
    wrap: 'wrap',
    alignItems: 'start',
    alignContent: 'start',
    justifyContent: 'start',
    shrink: false,
    grow: false,
    fixedContainer: false,
    containerWidth: 25,
    containerHeight: 25,
  };
};

const getArgTypes = () => {
  return {
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
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
