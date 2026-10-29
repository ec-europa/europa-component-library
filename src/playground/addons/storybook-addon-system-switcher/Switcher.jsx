import React from 'react';
import { ToggleButton, Separator } from 'storybook/internal/components';

function Switcher() {
  const fullUrl = window.location.href.split('?')[0];
  const playgroundPos = fullUrl.indexOf('/playground');
  const beforePlayground = fullUrl.substring(0, playgroundPos);
  const queryString = window.location.search;
  const system = process.env.STORYBOOK_SYSTEM.toLowerCase();
  const isEc = system === 'ec';
  const isEu = system === 'eu';

  return (
    <>
      <Separator />
      <ToggleButton
        ariaLabel="EC styleguide"
        variant="ghost"
        key="ec"
        pressed={isEc}
        title="EC styleguide"
        style={{ borderRadius: 0, fontWeight: 'bold' }}
      >
        {isEu ? (
          <a
            style={{
              color: '#999999',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
            href={`${beforePlayground}/playground/ec/${queryString}`}
          >
            <span>EC</span>
          </a>
        ) : (
          <span>EC</span>
        )}
      </ToggleButton>
      <ToggleButton
        ariaLabel="EU styleguide"
        variant="ghost"
        key="eu"
        pressed={isEu}
        title="EU styleguide"
        style={{ borderRadius: 0, fontWeight: 'bold' }}
      >
        {isEc ? (
          <a
            style={{
              color: '#999999',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
            href={`${beforePlayground}/playground/eu/${queryString}`}
          >
            <span>EU</span>
          </a>
        ) : (
          <span>EU</span>
        )}
      </ToggleButton>
    </>
  );
}

export default Switcher;
