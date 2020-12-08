import React from 'react';
import { useGlobals } from '@storybook/api';
import { IconButton } from '@storybook/components';
import euLogo from '@ecl/resources-eu-logo/logo--en.svg';
import ecLogo from '@ecl/resources-ec-logo/logo--en.svg';

export const Switcher = () => {
  const euActive = process.env.STORYBOOK_SYSTEM;
  const queryString = window.location.search;

  return (
    <React.Fragment>
      <IconButton
        key="ec"
        active={!euActive}
        title="Go to the EC styleguide"
        style={{ padding: 0, borderRadius: 0 }}
      >
        {euActive ? (
          <link
            rel="prefetch"
            title="go to the EU"
            href={'/playground/ec' + queryString}
            as="document"
            style={{
              display: 'block',
              width: '100px',
              height: '30px',
              border: '1px solid red',
            }}
          />
        ) : (
          <img style={{ width: 130 + 'px' }} src={ecLogo} />
        )}
      </IconButton>
      <IconButton
        key="eu"
        active={euActive}
        title="Go to the EU styleguide"
        style={{ padding: 0, borderRadius: 0 }}
      >
        {!euActive ? (
          <link
            rel="prefetch"
            title="Go to the EC"
            href={'/playground/eu' + queryString}
            as="document"
            style={{
              display: 'block',
              width: '100px',
              height: '30px',
              border: '1px solid red',
            }}
          />
        ) : (
          <img style={{ width: 130 + 'px' }} src={euLogo} />
        )}
      </IconButton>
    </React.Fragment>
  );
};
