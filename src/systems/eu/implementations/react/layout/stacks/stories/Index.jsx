import React from 'react';
import classnames from 'classnames';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';

/* eslint-disable-next-line react/prop-types */
function Box({ width, shrink, grow, ...props }) {
  return (
    <div
      className={classnames('ecl-u-bg-primary ecl-u-color-white', {
        [`ecl-u-flex-shrink-${shrink ? '1' : '0'}`]: true,
        [`ecl-u-flex-grow-${grow ? '1' : '0'}`]: true,
      })}
      style={{
        boxSizing: 'border-box',
        border: '1px solid #9F9F9F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: width || '2rem',
        width: width || '2rem',
      }}
      {...props}
    />
  );
}

export default {
  title: 'Layout/Stacks',
  decorators: [withKnobs],

  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export function Custom() {
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

  return (
    <div
      className={classnames('ecl-u-d-flex', {
        [`ecl-u-flex-${direction}`]: true,
        [`ecl-u-flex-${wrap}`]: true,
        [`ecl-u-align-items-${alignItems}`]: true,
        [`ecl-u-align-content-${alignContent}`]: true,
        [`ecl-u-justify-content-${justifyContent}`]: true,
      })}
      style={{
        ...(fixedContainer && {
          width: `${containerWidth}rem`,
          height: `${containerHeight}rem`,
        }),

        backgroundColor: '#F2F5F9',
        border: '2px solid #404040',
        boxSizing: 'border-box',
      }}
    >
      <Box width="5rem" shrink={shrink} grow={grow}>
        1
      </Box>
      <Box width="3rem" shrink={shrink} grow={grow}>
        2
      </Box>
      <Box width="3rem" shrink={shrink} grow={grow}>
        3
      </Box>
      <Box width="5rem" shrink={shrink} grow={grow}>
        4
      </Box>
      <Box width="4rem" shrink={shrink} grow={grow}>
        5
      </Box>
      <Box width="5rem" shrink={shrink} grow={grow}>
        6
      </Box>
      <Box width="4rem" shrink={shrink} grow={grow}>
        7
      </Box>
      <Box width="5rem" shrink={shrink} grow={grow}>
        8
      </Box>
      <Box width="6rem" shrink={shrink} grow={grow}>
        9
      </Box>
      <Box width="4rem" shrink={shrink} grow={grow}>
        10
      </Box>
      <Box width="17rem" shrink={shrink} grow={grow}>
        11
      </Box>
      <Box width="4rem" shrink={shrink} grow={grow}>
        12
      </Box>
    </div>
  );
}

Custom.storyName = 'custom';
