import React from 'react';
import PropTypes from 'prop-types';

// Import resources
import { logoEcEn } from '@ecl/preset-ec/dist/images/logo/positive/esm-export';
import { logoEuEn } from '@ecl/preset-eu/dist/images/logo/standard-version/positive/esm-export';
import LogoLink from './LogoLink';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

import utilities from '../../styles/utilities.module.scss';
import styles from './SplashPage.module.scss';

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
          <LogoLink
            to="/ec"
            aria-label="Open EU system"
            system="ec"
            logo={logoEcEn}
          />
        </Col>
        <Col
          col="12 m-6"
          className={`${utilities['d-flex']} ${styles['splash-page-actions-col']}`}
        >
          <LogoLink
            to="/eu"
            aria-label="Open EU system"
            system="eu"
            logo={logoEuEn}
          />
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
