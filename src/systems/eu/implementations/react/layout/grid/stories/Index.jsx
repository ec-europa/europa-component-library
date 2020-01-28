/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ExampleFixed from '../examples/Fixed';
import ExampleFluid from '../examples/Fluid';

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

// eslint-disable-next-line react/prop-types
const Background = ({ fluid }) => (
  <div
    className={fluid ? 'ecl-container-fluid' : 'ecl-container'}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <div
      className="ecl-row ecl-u-d-m-none"
      style={{
        height: '100%',
      }}
    >
      {new Array(4).fill().map((v, i) => (
        <div className="ecl-col-3" key={`bg-${i}`}>
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
    <div
      className="ecl-row ecl-u-d-none ecl-u-d-m-flex"
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

storiesOf('Layout|Grid', module)
  .addParameters({
    viewport: {
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .add('Fixed grid', () => (
    <Demo>
      <Background />
      <ExampleFixed />
    </Demo>
  ))
  .add('Fluid grid', () => (
    <Demo>
      <Background fluid />
      <ExampleFluid />
    </Demo>
  ));
