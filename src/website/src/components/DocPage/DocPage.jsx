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

const DocPage = React.memo(({ component }) => {
  const pageStructure = component.inpageNav ? (
    <Row>
      <Col col="12 xl-9">{component.document && <component.document />}</Col>
      <Col col="12 xl-3" className={styles['inpage-nav']}>
        <component.inpageNav />
      </Col>
    </Row>
  ) : (
    component.document && <component.document />
  );

  return (
    <Fragment>
      <ScrollToTopOnMount />
      <Helmet title={component.title} />
      <Header component={component} />
      <main id="main-content" tabIndex="-1">
        <Container spacing="pv-l pv-md-3xl">{pageStructure}</Container>
      </main>
    </Fragment>
  );
});

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
    inpageNav: PropTypes.func,
  }),
};

DocPage.defaultProps = {
  component: {},
};

export default withRouter(DocPage);
