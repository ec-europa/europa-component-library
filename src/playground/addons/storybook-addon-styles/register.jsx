import React, { useState, useEffect } from 'react';
import { addons, types, useGlobals } from '@storybook/manager-api';
import { TOGGLE_STYLE } from './index';

const ADDON_ID = 'styles-toggle';
const PANEL_ID = `${ADDON_ID}/panel`;

function StylePanel() {
  // Changed to function declaration
  const [globals] = useGlobals();
  const styleSheets = globals.styleSheets || [];
  const [styles, setStyles] = useState({});

  useEffect(() => {
    if (styleSheets.length > 0) {
      setStyles(Object.fromEntries(styleSheets.map((s) => [s.id, s.picked])));
    }
  }, [styleSheets]);

  const channel = addons.getChannel();

  const handleToggle = (id) => (e) => {
    const enabled = e.target.checked;
    setStyles((prev) => ({ ...prev, [id]: enabled }));
    channel.emit(TOGGLE_STYLE, { key: id, enabled });
  };

  const handleGroupToggle = (group) => (e) => {
    const enabled = e.target.checked;
    const groupStyles = styleSheets
      .filter((s) => s.group === group)
      .reduce((acc, s) => ({ ...acc, [s.id]: enabled }), {});
    setStyles((prev) => ({ ...prev, ...groupStyles }));
    styleSheets
      .filter((s) => s.group === group)
      .forEach((s) => channel.emit(TOGGLE_STYLE, { key: s.id, enabled }));
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
            color: #222;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .styles-toggle-panel label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: #333;
            cursor: pointer;
            padding-left: 24px;
          }
          .styles-toggle-panel input[type="checkbox"] {
            appearance: none;
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
            content: '✔';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 12px;
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
    title: 'Styles',
    render: ({ active }) => (active ? <StylePanel /> : null),
  });
});

export default {};
