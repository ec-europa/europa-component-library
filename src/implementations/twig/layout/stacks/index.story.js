import classnames from 'classnames';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';
import { styled } from '@ecl/dom-utils';

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
  decorators: [withKnobs],

  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const Custom = () => {
  const direction = select(
    'Direction',
    {
      Row: 'row',
      'Row reverse': 'row-reverse',
      Column: 'column',
      'Column reverse': 'column-reverse',
    },
    'row',
    'Container'
  );

  const wrap = select(
    'Wrap',
    {
      Wrap: 'wrap',
      'No wrap': 'nowrap',
      'Wrap reverse': 'wrap-reverse',
    },
    'wrap',
    'Container'
  );

  const alignItems = select(
    'Align items',
    {
      Start: 'start',
      End: 'end',
      Center: 'center',
      Baseline: 'baseline',
      Stretch: 'stretch',
    },
    'start',
    'Container'
  );

  const alignContent = select(
    'Align content',
    {
      Start: 'start',
      End: 'end',
      Center: 'center',
      'Space between': 'between',
      'Space around': 'around',
      Stretch: 'stretch',
    },
    'start',
    'Container'
  );

  const justifyContent = select(
    'Justify content',
    {
      Start: 'start',
      End: 'end',
      Center: 'center',
      'Space between': 'between',
      'Space around': 'around',
    },
    'start',
    'Container'
  );

  const fixedContainer = boolean('Fixed container', false, 'Container');

  let containerWidth;
  let containerHeight;
  if (fixedContainer) {
    containerWidth = number(
      'Container width (rem)',
      25,
      {
        range: true,
        min: 15,
        max: 35,
        step: 1,
      },
      'Container'
    );

    containerHeight = number(
      'Container height (rem)',
      25,
      {
        range: true,
        min: 15,
        max: 35,
        step: 1,
      },
      'Container'
    );
  }

  const shrink = boolean('Shrink', false, 'Items');
  const grow = boolean('Grow', false, 'Items');

  return `
    <div
      class="${classnames('ecl-u-d-flex', {
        [`ecl-u-flex-${direction}`]: true,
        [`ecl-u-flex-${wrap}`]: true,
        [`ecl-u-align-items-${alignItems}`]: true,
        [`ecl-u-align-content-${alignContent}`]: true,
        [`ecl-u-justify-content-${justifyContent}`]: true,
      })}"
      style="${styled({
        ...(fixedContainer && {
          width: `${containerWidth}rem`,
          height: `${containerHeight}rem`,
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
