import { useChannel, useGlobals } from '@storybook/preview-api';
import { toggleStyle, TOGGLE_STYLE } from '@ecl/storybook-addon-styles';

let hasInitializedStyles = false;

export const decorators = [
  (story, context) => {
    const styleSheets = context.parameters?.styleToggle?.styleSheets ?? [];

    const [globals] = useGlobals();
    const toggledStyles = globals?.styleToggles || {};

    useChannel({
      [TOGGLE_STYLE]: ({ key, enabled }) =>
        toggleStyle(key, enabled, styleSheets),
    });

    if (!hasInitializedStyles) {
      hasInitializedStyles = true;

      styleSheets.forEach(({ id, group, picked }) => {
        let enabled;

        if (group === 'screen' && typeof toggledStyles.screen === 'boolean') {
          enabled = toggledStyles.screen;
        } else if (
          group === 'print' &&
          typeof toggledStyles.print === 'boolean'
        ) {
          enabled = toggledStyles.print;
        } else {
          enabled = picked;
        }

        if (enabled) {
          toggleStyle(id, true, styleSheets);
        }
      });
    }

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
