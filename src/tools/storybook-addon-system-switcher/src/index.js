import React from 'react';
import { useGlobals } from '@storybook/api';
import { IconButton, Link } from '@storybook/components';
import euLogo from '@ecl/resources-eu-logo/logo--en.svg';
import ecLogo from '@ecl/resources-ec-logo/logo--en.svg';

export const Switcher = () => {
  const [globals] = useGlobals();
  const PARAM_KEY = 'system';
  const ecActive = globals[PARAM_KEY] === 'EC';

  return (
    <React.Fragment>
      <IconButton
        key="ec"
        active={ecActive}
        title="Got to the EC styleguide"
        style={{ padding: 0, borderRadius: 0 }}
      >
        {!ecActive ? (
          <a href="/ec">
            <img style={{ width: 130 + 'px' }} src={ecLogo} />
          </a>
        ) : (
          <img style={{ width: 130 + 'px' }} src={ecLogo} />
        )}
      </IconButton>
      <IconButton
        key="eu"
        active={!ecActive}
        title="Go to the EU styleguide"
        style={{ padding: 0, borderRadius: 0 }}
      >
        {ecActive ? (
          <a href="/eu">
            <img style={{ width: 130 + 'px' }} src={euLogo} />
          </a>
        ) : (
          <img style={{ width: 130 + 'px' }} src={euLogo} />
        )}
      </IconButton>
    </React.Fragment>
  );
};
