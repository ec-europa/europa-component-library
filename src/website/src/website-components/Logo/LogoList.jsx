import React from 'react';
import PropTypes from 'prop-types';

// import logoEC from '@ecl/preset-ec/dist/images/logo/logo-ec--en.svg';
// import logoEU from '@ecl/preset-eu/dist/images/logo/standard-version/positive/logo-eu--en.svg';

import LogoCard from './LogoCard';
import styles from './LogoList.scss';

function LogoList({ system, set, color }) {
  if (system === 'eu') {
    const logosEUStandard = require.context(
      '@ecl/preset-eu/dist/images/logo/standard-version/positive',
      false,
      /\.svg$/
    );
    const logosEUCondensed = require.context(
      '@ecl/preset-eu/dist/images/logo/condensed-version/positive',
      false,
      /\.svg$/
    );
    const logosEU = set === 'condensed' ? logosEUCondensed : logosEUStandard;
    const pathsEU = logosEU.keys();

    return (
      <ul className={styles.logos}>
        {pathsEU.map((path) => (
          <LogoCard
            path={logosEU(path)}
            name={logosEU(path).split('/').pop().split('.')[0]}
            key={logosEU(path)}
            set={set}
            color={color}
          />
        ))}
      </ul>
    );
  }

  const logosECPositive = require.context(
    '@ecl/preset-ec/dist/images/logo/positive',
    false,
    /\.svg$/
  );
  const logosECNegative = require.context(
    '@ecl/preset-ec/dist/images/logo/negative',
    false,
    /\.svg$/
  );
  const logosEC = color === 'negative' ? logosECNegative : logosECPositive;
  const pathsEC = logosEC.keys();

  return (
    <ul className={styles.logos}>
      {pathsEC.map((path) => (
        <LogoCard
          path={logosEC(path)}
          name={logosEC(path).split('/').pop().split('.')[0]}
          key={logosEC(path)}
          set={set}
          color={color}
        />
      ))}
    </ul>
  );
}

LogoList.propTypes = {
  system: PropTypes.string,
  set: PropTypes.string,
  color: PropTypes.string,
};

LogoList.defaultProps = {
  system: 'ec',
  set: 'standard',
  color: 'positive',
};

export default LogoList;
