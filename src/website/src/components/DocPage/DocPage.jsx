import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { /* Route, Redirect, Switch, */ withRouter } from 'react-router-dom';

import Header from './Header';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import Container from '../Grid/Container';
import Col from '../Grid/Col';
import Row from '../Grid/Row';
import styles from './DocPage.scss';

const DocPage = React.memo(({ component }) => (
  <Fragment>
    <ScrollToTopOnMount />
    <Helmet title={component.title} />
    <Header component={component} />
    <main id="main-content" tabIndex="-1">
      <Container spacing="pv-l pv-md-3xl">
        <Row>
          <Col col="12 xl-9">
            {component.document && <component.document />}
          </Col>

          <Col col="12 xl-3" className={styles['inpage-nav']}>
            {/* Inpage navigation */}
          </Col>
        </Row>
      </Container>
    </main>
  </Fragment>
));

DocPage.propTypes = {
  component: PropTypes.shape({
    section: PropTypes.string,
    title: PropTypes.string,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        component: PropTypes.func,
      })
    ),
    defaultTab: PropTypes.string,
    document: PropTypes.func,
  }),
};

DocPage.defaultProps = {
  component: {},
};

export default withRouter(DocPage);
