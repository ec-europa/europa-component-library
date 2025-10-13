/* global ResizeObserver */

import React, { useEffect, useState } from 'react';
import { IconButton } from '@storybook/components';
import { useParameter } from '@storybook/manager-api';

const getColorForBreakpoint = (label) => {
  switch (label) {
    case 'xs':
      return '#ef4444';
    case 's':
      return '#f97316';
    case 'm':
      return '#eab308';
    case 'l':
      return '#22c55e';
    case 'xl':
      return '#3b82f6';
    default:
      return '#6b7280';
  }
};

export const WidthIndicator = () => {
  const breakpoints = useParameter('breakpoints', {});
  const [width, setWidth] = useState(0);
  const [bp, setBp] = useState('');

  const sortedBps = Object.entries(breakpoints)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => a.value - b.value);

  const getBreakpointLabel = (w) => {
    let current = sortedBps[0]?.label || '';
    for (const b of sortedBps) {
      if (w >= b.value) current = b.label;
      else break;
    }
    return current;
  };

  useEffect(() => {
    const preview = document.querySelector('#storybook-preview-iframe');

    const updateWidth = () => {
      if (preview && preview.clientWidth) {
        const w = preview.clientWidth;
        setWidth(w);
        setBp(getBreakpointLabel(w));
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    const resizeObserver = new ResizeObserver(updateWidth);
    if (preview) resizeObserver.observe(preview);

    return () => {
      window.removeEventListener('resize', updateWidth);
      resizeObserver.disconnect();
    };
  }, [sortedBps]);

  return (
    <IconButton
      title={`Preview width: ${width}px (${bp})`}
      active
      style={{
        backgroundColor: getColorForBreakpoint(bp),
        color: 'white',
        fontWeight: 'bold',
        transition: 'background-color 0.2s ease',
      }}
    >
      🧭 {width}px {bp && `(${bp})`}
    </IconButton>
  );
};
