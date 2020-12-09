import React from 'react';
import { IconButton, Separator } from '@storybook/components';

const Switcher = () => {
  const queryString = window.location.search;
  let system = window.location.pathname.split('/').filter((p) => p)[1];
  if (!system) {
    system = process.env.STORYBOOK_SYSTEM ? 'eu' : 'ec';
  }
  const isEc = system === 'ec';
  const isEu = system === 'eu';

  return (
    <>
      <Separator />
      <IconButton
        key="ec"
        active={isEc}
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
            href={`/playground/ec${queryString}`}
          >
            <span>EC</span>
          </a>
        ) : (
          <span>EC</span>
        )}
      </IconButton>
      <IconButton
        key="eu"
        active={isEu}
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
            href={`/playground/eu${queryString}`}
          >
            <span>EU</span>
          </a>
        ) : (
          <span>EU</span>
        )}
      </IconButton>
    </>
  );
};

export default Switcher;
