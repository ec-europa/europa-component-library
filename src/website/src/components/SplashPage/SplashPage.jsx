import React from 'react';
import PropTypes from 'prop-types';

// Import resources
import ECLogo from '@ecl/ec-preset-website/dist/images/logo/EC-logo-horizontal-desktop.svg';
import EULogo from '@ecl/eu-preset-website/dist/images/logo/logo--en.svg';
import LogoLink from './LogoLink';

import styles from './SplashPage.scss';
import utilities from '../../styles/utilities.scss';

const SplashPage = ({ children }) => (
  <main id="main-content" tabIndex="-1" className={styles['splash-page']}>
    <div className="custom-container">
      <div className={styles['splash-page-editor']}>{children}</div>
      <div className={`custom-row ${styles['splash-page-actions-row']}`}>
        <div
          className={`custom-col-4/4 custom-col-md-4/8 custom-col-xl-6/12 ${
            utilities['d-flex']
          }`}
        >
          <LogoLink to="/ec/" aria-label="Open EU system">
            <img src={ECLogo} alt="EC Logo" />
          </LogoLink>
        </div>
        <div
          className={`custom-col-4/4 custom-col-md-4/8 custom-col-xl-6/12 ${
            utilities['d-flex']
          }`}
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
