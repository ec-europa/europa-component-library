import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const getArgs = () => ({
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
    EclNotes: { disable: true },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const Custom = (_, { loaded: { component } }) => component;

Custom.render = async (args) => {
  const { shrink } = args;
  const { grow } = args;

  const renderedStacks = `<div
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
    ${await Box({ width: '5rem', shrink, grow, contents: '1' })}
    ${await Box({ width: '3rem', shrink, grow, contents: '2' })}
    ${await Box({ width: '3rem', shrink, grow, contents: '3' })}
    ${await Box({ width: '5rem', shrink, grow, contents: '4' })}
    ${await Box({ width: '4rem', shrink, grow, contents: '5' })}
    ${await Box({ width: '5rem', shrink, grow, contents: '6' })}
    ${await Box({ width: '4rem', shrink, grow, contents: '7' })}
    ${await Box({ width: '5rem', shrink, grow, contents: '8' })}
    ${await Box({ width: '6rem', shrink, grow, contents: '9' })}
    ${await Box({ width: '4rem', shrink, grow, contents: '10' })}
    ${await Box({ width: '17rem', shrink, grow, contents: '11' })}
    ${await Box({ width: '4rem', shrink, grow, contents: '12' })}
  </div>`;

  return renderedStacks;
};
Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
