/* eslint-disable react/no-array-index-key */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Example234612 from '../examples/234612';
import Example642 from '../examples/642';
import Example282 from '../examples/282';
import Example336 from '../examples/336';
import Offset from '../examples/Offset';
import Responsive from '../examples/Responsive';

// eslint-disable-next-line react/prop-types
const Demo = ({ children }) => (
  <div
    style={{
      padding: '2rem 0',
      position: 'relative',
      backgroundColor: '#FCF4FB',
    }}
  >
    {children}
  </div>
);

const Background = () => (
  <div
    className="ecl-container"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <div
      className="ecl-row"
      style={{
        height: '100%',
      }}
    >
      {new Array(12).fill().map((v, i) => (
        <div className="ecl-col-1" key={`bg-${i}`}>
          <div
            style={{
              backgroundColor: '#E9E3FC',
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

storiesOf('Layout/Grid', module)
  .addParameters({
    viewport: {
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .add('2-3-4-6-12', () => {
    return (
      <Demo>
        <Background />
        <Example234612 />
      </Demo>
    );
  })
  .add('6-4-2', () => {
    return (
      <Demo>
        <Background />
        <Example642 />
      </Demo>
    );
  })
  .add('2-8-2', () => {
    return (
      <Demo>
        <Background />
        <Example282 />
      </Demo>
    );
  })
  .add('3-3-6', () => {
    return (
      <Demo>
        <Background />
        <Example336 />
      </Demo>
    );
  })
  .add('offset', () => {
    return (
      <Demo>
        <Background />
        <Offset />
      </Demo>
    );
  })
  .add('responsive', () => {
    return (
      <Demo>
        <Background />
        <Responsive />
      </Demo>
    );
  });
