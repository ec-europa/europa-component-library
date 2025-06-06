import React, { useState, useEffect } from 'react';
import {
  addons,
  types,
  useGlobals,
  useParameter,
} from '@storybook/manager-api';
import { STORY_CHANGED } from '@storybook/core-events';
import { TOGGLE_STYLE } from './index';

const ADDON_ID = 'styles-toggle';
const PANEL_ID = `${ADDON_ID}/panel`;

function StylePanel() {
  const [globals] = useGlobals();
  const styleSheets = useParameter('styleToggle')?.styleSheets || [];
  const panelDescription =
    globals.panelDescription || 'Toggle styles for this demo.';
  const [styles, setStyles] = useState({});

  // Initialize styles from URL params or defaults
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const screenEnabled = params.get('screen') === 'true';
    const printEnabled = params.get('print') === 'true';

    const initialStyles = Object.fromEntries(
      styleSheets.map((s) => {
        if (s.group === 'screen' && params.has('screen')) {
          return [s.id, screenEnabled];
        }
        if (s.group === 'print' && params.has('print')) {
          return [s.id, printEnabled];
        }
        return [s.id, s.picked];
      }),
    );

    setStyles(initialStyles);
  }, [styleSheets]);

  const channel = addons.getChannel();

  // Apply styles to DOM
  useEffect(() => {
    const applyStyles = () => {
      if (Object.keys(styles).length === 0) return;
      styleSheets.forEach((s) => {
        const shouldBeEnabled = styles[s.id];
        channel.emit(TOGGLE_STYLE, { key: s.id, enabled: shouldBeEnabled });
      });
    };

    applyStyles();

    // FRONT-4921 - Fix styles when switching stories
    const onStoryChanged = () => {
      applyStyles();
    };

    channel.on(STORY_CHANGED, onStoryChanged);

    return () => {
      channel.off(STORY_CHANGED, onStoryChanged);
    };
  }, [styles, styleSheets]);

  const handleToggle = (id) => (e) => {
    const enabled = e.target.checked;
    setStyles((prev) => ({ ...prev, [id]: enabled }));
    channel.emit(TOGGLE_STYLE, { key: id, enabled });
  };

  const handleGroupToggle = (group) => (e) => {
    const enabled = e.target.checked;
    const oppositeGroup = group === 'screen' ? 'print' : 'screen';

    // Set styles for the toggled group and reset the opposite group
    const groupStyles = styleSheets
      .filter((s) => s.group === group)
      .reduce((acc, s) => ({ ...acc, [s.id]: enabled }), {});
    const oppositeStyles = styleSheets
      .filter((s) => s.group === oppositeGroup)
      .reduce((acc, s) => ({ ...acc, [s.id]: false }), {});

    setStyles((prev) => ({ ...prev, ...groupStyles, ...oppositeStyles }));

    // Emit TOGGLE_STYLE for both groups
    styleSheets
      .filter((s) => s.group === group)
      .forEach((s) => {
        channel.emit(TOGGLE_STYLE, { key: s.id, enabled });
      });
    styleSheets
      .filter((s) => s.group === oppositeGroup)
      .forEach((s) => {
        channel.emit(TOGGLE_STYLE, { key: s.id, enabled: false });
      });

    // Update URL params
    const params = new URLSearchParams(window.location.search);
    params.set(group, enabled.toString());
    params.set(oppositeGroup, 'false');
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params}`,
    );
  };

  const groups = {
    screen: styleSheets.filter((s) => s.group === 'screen'),
    print: styleSheets.filter((s) => s.group === 'print'),
    others: styleSheets.filter((s) => s.group === 'others'),
  };

  const isGroupChecked = (group) =>
    groups[group].length > 0 && groups[group].every((s) => styles[s.id]);

  return (
    <div className="styles-toggle-panel">
      <style>
        {`
          .styles-toggle-panel {
            padding: 16px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .styles-toggle-panel .panel-header {
            font-size: 14px;
            margin-bottom: 20px;
            line-height: 1.4;
          }
          .styles-toggle-panel form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .styles-toggle-panel .group {
            display: flex;
            flex-direction: column;
            gap: 12px;
            min-width: 200px;
          }
          .styles-toggle-panel .group-title {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 8px;
            padding-bottom: 4px;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .styles-toggle-panel label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            cursor: pointer;
          }
          .styles-toggle-panel input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 16px;
            height: 16px;
            border: 2px solid #666;
            border-radius: 4px;
            position: relative;
            cursor: pointer;
          }
          .styles-toggle-panel input[type="checkbox"]:checked {
            background-color: #007bff;
            border-color: #007bff;
          }
          .styles-toggle-panel input[type="checkbox"]:checked::after {
            content: '';
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
            background-size: cover;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 12px;
            height: 12px;
            color: #ffffff;
          }
          .styles-toggle-panel input[type="checkbox"]:hover {
            border-color: #999;
          }
          @media (min-width: 768px) {
            .styles-toggle-panel form {
              flex-direction: row;
              gap: 24px;
              flex-wrap: wrap;
            }
            .styles-toggle-panel .group {
              flex: 1;
            }
          }
        `}
      </style>
      <div className="panel-header">{panelDescription}</div>
      <form>
        <div className="group">
          <label className="group-title" htmlFor="screen-toggle">
            <input
              id="screen-toggle"
              type="checkbox"
              checked={isGroupChecked('screen')}
              onChange={handleGroupToggle('screen')}
            />
            Screen
          </label>
          {groups.screen.map(({ id }) => (
            <label key={id} htmlFor={`style-${id}`}>
              <input
                id={`style-${id}`}
                type="checkbox"
                checked={styles[id] || false}
                onChange={handleToggle(id)}
              />
              {id}
            </label>
          ))}
        </div>
        <div className="group">
          <label className="group-title" htmlFor="print-toggle">
            <input
              id="print-toggle"
              type="checkbox"
              checked={isGroupChecked('print')}
              onChange={handleGroupToggle('print')}
            />
            Print
          </label>
          {groups.print.map(({ id }) => (
            <label key={id} htmlFor={`style-${id}`}>
              <input
                id={`style-${id}`}
                type="checkbox"
                checked={styles[id] || false}
                onChange={handleToggle(id)}
              />
              {id}
            </label>
          ))}
        </div>
        <div className="group">
          <div className="group-title">Others</div>
          {groups.others.map(({ id }) => (
            <label key={id} htmlFor={`style-${id}`}>
              <input
                id={`style-${id}`}
                type="checkbox"
                checked={styles[id] || false}
                onChange={handleToggle(id)}
              />
              {id}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: () => {
      const [globals] = useGlobals();
      return globals.panelTitle || 'Styles';
    },
    render: ({ active }) => (active ? <StylePanel /> : null),
  });
});

export default {};
