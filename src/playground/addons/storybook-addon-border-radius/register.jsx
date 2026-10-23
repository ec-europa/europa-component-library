import React, { useEffect } from 'react';
import { addons, types, useAddonState } from '@storybook/manager-api';
import { BORDER_RADIUS_CHANGED } from './index';

const ADDON_ID = 'ecl/border-radius';
const BORDER_RADIUS_OPTIONS = [2, 4, 6, 8, 10, 12, 14, 16];

function BorderRadiusTool() {
  const [borderRadius, setBorderRadius] = useAddonState(ADDON_ID, '');
  const channel = addons.getChannel();

  useEffect(() => {
    channel.emit(BORDER_RADIUS_CHANGED, borderRadius);
  }, [borderRadius, channel]);

  return (
    <label
      style={{
        alignItems: 'center',
        display: 'inline-flex',
        gap: '0.5rem',
        padding: '0 0.5rem',
      }}
    >
      <span>Border radius</span>
      <select
        aria-label="Border radius"
        onChange={(event) => setBorderRadius(event.target.value)}
        value={borderRadius}
      >
        <option value="">Auto</option>
        {BORDER_RADIUS_OPTIONS.map((value) => (
          <option key={value} value={`${value}px`}>
            {value}px
          </option>
        ))}
      </select>
    </label>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(`${ADDON_ID}/tool`, {
    type: types.TOOL,
    title: 'Border radius',
    render: () => <BorderRadiusTool />,
  });
});
