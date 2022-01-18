import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Example234612 from '../examples/234612';
import Example642 from '../examples/642';
import Example282 from '../examples/282';
import Example336 from '../examples/336';
import Offset from '../examples/Offset';
import Responsive from '../examples/Responsive';

// eslint-disable-next-line react/prop-types
function Demo({ children }) {
  return (
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
}

function Background() {
  return (
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
}

export default {
  title: 'Layout/Grid',
  decorators: [withKnobs],

  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export function _234612() {
  return (
    <Demo>
      <Background />
      <Example234612 />
    </Demo>
  );
}

_234612.storyName = '2-3-4-6-12';

export function _642() {
  return (
    <Demo>
      <Background />
      <Example642 />
    </Demo>
  );
}

_642.storyName = '6-4-2';

export function _282() {
  return (
    <Demo>
      <Background />
      <Example282 />
    </Demo>
  );
}

_282.storyName = '2-8-2';

export function _336() {
  return (
    <Demo>
      <Background />
      <Example336 />
    </Demo>
  );
}

_336.storyName = '3-3-6';

export function _Offset() {
  return (
    <Demo>
      <Background />
      <Offset />
    </Demo>
  );
}

_Offset.storyName = 'offset';

export function _Responsive() {
  return (
    <Demo>
      <Background />
      <Responsive />
    </Demo>
  );
}

_Responsive.storyName = 'responsive';
