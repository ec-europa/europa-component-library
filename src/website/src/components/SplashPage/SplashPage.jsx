import React from 'react';
import PropTypes from 'prop-types';

// Import resources
import ECLogo from '@ecl/ec-preset-website/dist/images/logo/EC-logo-horizontal-desktop.svg';
import EULogo from '@ecl/eu-preset-website/dist/images/logo/logo--en.svg';
import LogoLink from './LogoLink';

import grid from '../../styles/grid.scss';
import utilities from '../../styles/utilities.scss';
import styles from './SplashPage.scss';

const SplashPage = ({ children }) => (
  <main id="main-content" tabIndex="-1" className={styles['splash-page']}>
    <div className={grid.container}>
      <div className={styles['splash-page-editor']}>{children}</div>
      <div className={`${grid.row} ${styles['splash-page-actions-row']}`}>
        <div
          className={`${grid['col-4/4']} ${grid['col-md-4/8']} ${
            grid['col-xl-6/12']
          } ${utilities['d-flex']} ${styles['splash-page-actions-col']}`}
        >
          <LogoLink to="/ec/" aria-label="Open EU system">
            <img src={ECLogo} alt="EC Logo" />
          </LogoLink>
        </div>
        <div
          className={`${grid['col-4/4']} ${grid['col-md-4/8']} ${
            grid['col-xl-6/12']
          } ${utilities['d-flex']} ${styles['splash-page-actions-col']}`}
        >
          <LogoLink to="/eu/" aria-label="Open EU system">
            <img src={EULogo} alt="EU Logo" />
          </LogoLink>
        </div>
      </div>
    </div>
  </main>
);

SplashPage.propTypes = {
  children: PropTypes.node,
};

SplashPage.defaultProps = {
  children: null,
};

export default SplashPage;
