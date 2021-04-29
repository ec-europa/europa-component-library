import React from 'react';
import PropTypes from 'prop-types';

// Import resources
import ECLogo from '@ecl/preset-ec/dist/images/logo/logo-ec--en.svg';
import EULogo from '@ecl/preset-eu/dist/images/logo/standard-version/positive/logo-eu--en.svg';
import LogoLink from './LogoLink';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

import utilities from '../../styles/utilities.scss';
import styles from './SplashPage.scss';

const SplashPage = React.memo(({ children }) => (
  <main id="main-content" tabIndex="-1" className={styles['splash-page']}>
    <ScrollToTopOnMount />
    <Container>
      {children}
      <Row className={styles['splash-page-actions-row']}>
        <Col
          col="12 m-6"
          className={`${utilities['d-flex']} ${styles['splash-page-actions-col']}`}
        >
          <LogoLink to="/ec/" aria-label="Open EU system" system="ec">
            <img src={ECLogo} alt="EC Logo" />
          </LogoLink>
        </Col>
        <Col
          col="12 m-6"
          className={`${utilities['d-flex']} ${styles['splash-page-actions-col']}`}
        >
          <LogoLink to="/eu/" aria-label="Open EU system" system="eu">
            <img src={EULogo} alt="EU Logo" />
          </LogoLink>
        </Col>
      </Row>
    </Container>
  </main>
));

SplashPage.propTypes = {
  children: PropTypes.node,
};

SplashPage.defaultProps = {
  children: null,
};

export default SplashPage;
