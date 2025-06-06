import { useChannel } from '@storybook/preview-api';
import { toggleStyle, TOGGLE_STYLE } from '@ecl/storybook-addon-styles';

export const decorators = [
  (story, context) => {
    const styleSheets = context.parameters?.styleToggle?.styleSheets ?? [];

    useChannel({
      [TOGGLE_STYLE]: ({ key, enabled }) =>
        toggleStyle(key, enabled, styleSheets),
    });

    // Initial load
    styleSheets.forEach(({ id, picked }) => {
      if (picked && !document.getElementById(`style-${id}`)) {
        toggleStyle(id, true, styleSheets);
      }
    });

    return story();
  },
];

export const globalTypes = {
  styleToggles: {
    name: 'Style Toggles',
    description: 'Enable/disable style groups',
    defaultValue: {},
    toolbar: {
      hidden: true, // Since we use a custom panel
    },
  },
};
