import { useChannel, useGlobals } from '@storybook/preview-api';
import { toggleStyle, TOGGLE_STYLE } from '@ecl/storybook-addon-styles';

export const decorators = [
  (story, context) => {
    const styleSheets = context.parameters?.styleToggle?.styleSheets ?? [];

    const [globals] = useGlobals();
    const toggledStyles = globals?.styleToggles || {};

    useChannel({
      [TOGGLE_STYLE]: ({ key, enabled }) =>
        toggleStyle(key, enabled, styleSheets),
    });

    // Apply toggles from globals (from addon UI)
    styleSheets.forEach(({ id, picked }) => {
      const enabled =
        typeof toggledStyles[id] === 'boolean' ? toggledStyles[id] : picked;
      if (enabled && !document.getElementById(`style-${id}`)) {
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
