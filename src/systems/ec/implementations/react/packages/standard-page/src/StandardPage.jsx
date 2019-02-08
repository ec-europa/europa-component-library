import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Card from '@ecl/ec-react-component-card/src/Card';
import Footer from '@ecl/ec-react-component-footer/src/Footer';
import MediaContainer from '@ecl/ec-react-component-media-container/src/MediaContainer';
import PageHeader from '@ecl/ec-react-component-page-header/src/PageHeader';
import SiteHeader from '@ecl/ec-react-component-site-header/src/SiteHeader';
import SiteSwitcher from '@ecl/ec-react-component-site-switcher/src/SiteSwitcher';

const StandardPage = ({
  siteSwitcher,
  siteHeader,
  pageHeader,
  mediaContainer,
  footer,
  card,
}) => (
  <Fragment>
    <SiteSwitcher {...siteSwitcher} />
    <SiteHeader {...siteHeader} />
    <PageHeader {...pageHeader} />
    <main className="ecl-u-pv-xl">
      <div className="ecl-container">
        <div className="ecl-row">
          <div className="ecl-col-sm-12 ecl-col-md-6">
            <MediaContainer {...mediaContainer} />
          </div>

          <div className="ecl-col-sm-12 ecl-col-md-6" />
        </div>

        <div className="ecl-row ecl-u-mt-l">
          <div className="ecl-col-sm-12 ecl-col-md-4">
            <Card {...card} />
          </div>
          <div className="ecl-col-sm-12 ecl-col-md-4">
            <Card {...card} />
          </div>
          <div className="ecl-col-sm-12 ecl-col-md-4">
            <Card {...card} />
          </div>
        </div>
      </div>
    </main>
    <Footer {...footer} />
  </Fragment>
);

StandardPage.propTypes = {
  siteSwitcher: PropTypes.shape(SiteSwitcher.propTypes),
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  mediaContainer: PropTypes.shape(MediaContainer.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
  card: PropTypes.shape(Card.propTypes),
};

StandardPage.defaultProps = {
  siteSwitcher: {},
  siteHeader: {},
  pageHeader: {},
  mediaContainer: {},
  footer: {},
  card: {},
};

export default StandardPage;
