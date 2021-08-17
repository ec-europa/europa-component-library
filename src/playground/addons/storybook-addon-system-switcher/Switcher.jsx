import React from 'react';
import { IconButton, Separator } from '@storybook/components';
import getSystem from '@ecl/builder/utils/getSystem';

const Switcher = () => {
  const fullUrl = window.location.href.split('?')[0];
  const playgroundPos = fullUrl.indexOf('/playground');
  const beforePlayground = fullUrl.substring(0, playgroundPos);
  const queryString = window.location.search;
  const system = getSystem();
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
            href={`${beforePlayground}/playground/ec${queryString}`}
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
            href={`${beforePlayground}/playground/eu${queryString}`}
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
