/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line react/prop-types
const Demo = ({ children }) => (
  <div
    style={{
      position: 'relative',
      minHeight: '100vh',
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

// eslint-disable-next-line react/prop-types
const Box = ({ padding, className }) => (
  <div className={className}>
    <div
      style={{
        backgroundColor: '#6D9DC7',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1rem',
        padding: padding || '0.75rem',
      }}
    >
      {className
        .split(' ')
        .filter(str => str)
        .map(str => `.${str}`)
        .join(' ')}
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
  .add('1-2-3-4-6-12', () => {
    return (
      <Demo>
        <Background />
        <div className="ecl-container">
          <div className="ecl-row ecl-u-pt-m">
            {new Array(12).fill().map((v, i) => (
              <Box className="ecl-col-1" padding="0.25rem" key={`b1-${i}`} />
            ))}
          </div>
          <div className="ecl-row ecl-u-mt-m">
            {new Array(6).fill().map((v, i) => (
              <Box className="ecl-col-2" key={`b2-${i}`} />
            ))}
          </div>
          <div className="ecl-row ecl-u-mt-m">
            {new Array(4).fill().map((v, i) => (
              <Box className="ecl-col-3" key={`b3-${i}`} />
            ))}
          </div>
          <div className="ecl-row ecl-u-mt-m">
            {new Array(3).fill().map((v, i) => (
              <Box className="ecl-col-4" key={`b4-${i}`} />
            ))}
          </div>
          <div className="ecl-row ecl-u-mt-m">
            {new Array(2).fill().map((v, i) => (
              <Box className="ecl-col-6" key={`b5-${i}`} />
            ))}
          </div>
          <div className="ecl-row ecl-u-mt-m">
            <Box className="ecl-col-12" />
          </div>
        </div>
      </Demo>
    );
  })
  .add('6-4-2', () => {
    return (
      <Demo>
        <Background />
        <div className="ecl-container">
          <div className="ecl-row ecl-u-pt-m">
            <Box className="ecl-col-6" />
            <Box className="ecl-col-4" />
            <Box className="ecl-col-2" />
          </div>
        </div>
      </Demo>
    );
  })
  .add('3-3-6', () => {
    return (
      <Demo>
        <Background />
        <div className="ecl-container">
          <div className="ecl-row ecl-u-pt-m">
            <Box className="ecl-col-3" />
            <Box className="ecl-col-3" />
            <Box className="ecl-col-6" />
          </div>
        </div>
      </Demo>
    );
  })
  .add('2-8-2', () => {
    return (
      <Demo>
        <Background />
        <div className="ecl-container">
          <div className="ecl-row ecl-u-pt-m">
            <Box className="ecl-col-2" />
            <Box className="ecl-col-8" />
            <Box className="ecl-col-2" />
          </div>
        </div>
      </Demo>
    );
  });
