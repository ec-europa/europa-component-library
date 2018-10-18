import React from 'react';
import PropTypes from 'prop-types';

// Import resources
import ECLogo from '@ecl/ec-preset-website/dist/images/logo/EC-logo--en.svg';
import EULogo from '@ecl/eu-preset-website/dist/images/logo/logo--en.svg';
import LogoLink from './LogoLink';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

import utilities from '../../styles/utilities.scss';
import styles from './SplashPage.scss';

const SplashPage = ({ children }) => (
  <main id="main-content" tabIndex="-1" className={styles['splash-page']}>
    <ScrollToTopOnMount />
    <Container>
      {children}
      <Row className={styles['splash-page-actions-row']}>
        <Col
          col="12 md-6"
          className={`${utilities['d-flex']} ${
            styles['splash-page-actions-col']
          }`}
        >
          <LogoLink to="/ec/" aria-label="Open EU system">
            <img src={ECLogo} alt="EC Logo" />
          </LogoLink>
        </Col>
        <Col
          col="12 md-6"
          className={`${utilities['d-flex']} ${
            styles['splash-page-actions-col']
          }`}
        >
          <LogoLink to="/eu/" aria-label="Open EU system">
            <img src={EULogo} alt="EU Logo" />
          </LogoLink>
        </Col>
      </Row>
    </Container>
  </main>
);

SplashPage.propTypes = {
  children: PropTypes.node,
};

SplashPage.defaultProps = {
  children: null,
};

export default SplashPage;
