/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Layout|Grid', module)
  .addParameters({
    viewport: {
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .add('custom', () => {
    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <div
          className="ecl-container"
          style={{
            backgroundColor: '#FCF4FB',
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
            {new Array(12).fill().map(() => (
              <div className="ecl-col-1">
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
        <div className="ecl-container">
          <div className="ecl-row">
            {new Array(12).fill().map(() => (
              <div className="ecl-col-1">
                <div
                  style={{
                    backgroundColor: '#6DC79F',
                    color: '#fff',
                    padding: '0.25rem',
                  }}
                >
                  .ecl-col-1
                </div>
              </div>
            ))}
          </div>
          <div className="ecl-row" style={{ marginTop: '1rem' }}>
            {new Array(6).fill().map(() => (
              <div className="ecl-col-2">
                <div
                  style={{
                    backgroundColor: '#6DC79F',
                    color: '#fff',
                    padding: '0.5rem',
                  }}
                >
                  .ecl-col-2
                </div>
              </div>
            ))}
          </div>
          <div className="ecl-row" style={{ marginTop: '1rem' }}>
            {new Array(4).fill().map(() => (
              <div className="ecl-col-3">
                <div
                  style={{
                    backgroundColor: '#6DC79F',
                    color: '#fff',
                    padding: '0.5rem',
                  }}
                >
                  .ecl-col-3
                </div>
              </div>
            ))}
          </div>
          <div className="ecl-row" style={{ marginTop: '1rem' }}>
            {new Array(3).fill().map(() => (
              <div className="ecl-col-4">
                <div
                  style={{
                    backgroundColor: '#6DC79F',
                    color: '#fff',
                    padding: '0.5rem',
                  }}
                >
                  .ecl-col-4
                </div>
              </div>
            ))}
          </div>
          <div className="ecl-row" style={{ marginTop: '1rem' }}>
            {new Array(2).fill().map(() => (
              <div className="ecl-col-6">
                <div
                  style={{
                    backgroundColor: '#6DC79F',
                    color: '#fff',
                    padding: '0.5rem',
                  }}
                >
                  .ecl-col-6
                </div>
              </div>
            ))}
          </div>
          <div className="ecl-row" style={{ marginTop: '1rem' }}>
            <div className="ecl-col-12">
              <div
                style={{
                  backgroundColor: '#6DC79F',
                  color: '#fff',
                  padding: '0.5rem',
                }}
              >
                .ecl-col-12
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
