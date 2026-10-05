/* global ResizeObserver */

import React, { useEffect, useMemo, useState } from 'react';
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
  const { container } = useParameter('breakpointIndicator', {});

  const [width, setWidth] = useState(0);
  const [bp, setBp] = useState('');

  const sortedBps = useMemo(
    () =>
      Object.entries(breakpoints)
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => a.value - b.value),
    [breakpoints],
  );

  const getBreakpointLabel = (w) => {
    let current = sortedBps[0]?.label || '';

    for (const b of sortedBps) {
      if (w >= b.value) {
        current = b.label;
      } else {
        break;
      }
    }

    return current;
  };

  useEffect(() => {
    const preview = document.querySelector('#storybook-preview-iframe');

    const getBreakpointWidth = () => {
      if (!preview) {
        return 0;
      }

      if (container) {
        const containerElement =
          preview.contentDocument?.querySelector(container);

        if (containerElement) {
          return containerElement.getBoundingClientRect().width;
        }
      }

      return preview.clientWidth;
    };

    const updateWidth = () => {
      if (preview?.clientWidth) {
        const viewportWidth = preview.clientWidth;
        const breakpointWidth = getBreakpointWidth();

        setWidth(viewportWidth);
        setBp(getBreakpointLabel(breakpointWidth));
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    const resizeObserver = new ResizeObserver(updateWidth);

    if (preview) {
      resizeObserver.observe(preview);

      if (container) {
        const containerElement =
          preview.contentDocument?.querySelector(container);

        if (containerElement) {
          resizeObserver.observe(containerElement);
        }
      }
    }

    return () => {
      window.removeEventListener('resize', updateWidth);
      resizeObserver.disconnect();
    };
  }, [container, sortedBps]);

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
