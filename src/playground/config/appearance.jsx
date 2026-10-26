import React, { useState } from 'react';
import { addons, types } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';
import { create } from 'storybook/theming';

// Keep the manager theme switch independent of ECL's EC colour modes.
export function registerThemeTool(brandTitle) {
  function ThemeTool() {
    const [dark, setDark] = useState(false);
    return (
      <IconButton
        title={dark ? 'Use light interface' : 'Use dark interface'}
        active={dark}
        onClick={() => {
          const next = !dark;
          setDark(next);
          addons.setConfig({
            theme: create({
              base: next ? 'dark' : 'light',
              brandTitle,
              brandUrl: 'https://github.com/ec-europa/europa-component-library',
            }),
          });
        }}
      >
        {dark ? 'Light' : 'Dark'}
      </IconButton>
    );
  }

  addons.register('ecl/interface-theme', () => {
    addons.add('ecl/interface-theme/tool', {
      type: types.TOOL,
      title: 'Interface theme',
      render: () => <ThemeTool />,
    });
  });
}
