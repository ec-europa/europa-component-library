import React from 'react';
import PropTypes from 'prop-types';

import Card from '@ecl/ec-react-component-card';
import Footer from '@ecl/ec-react-component-footer';
import MediaContainer from '@ecl/ec-react-component-media-container';
import PageHeader from '@ecl/ec-react-component-page-header';
import SiteHeader from '@ecl/ec-react-component-site-header';

function StandardPage({
  siteHeader,
  pageHeader,
  mediaContainer,
  footer,
  card,
}) {
  return (
    <>
      <SiteHeader {...siteHeader} data-ecl-auto-init="SiteHeader" />
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
    </>
  );
}

StandardPage.propTypes = {
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  mediaContainer: PropTypes.shape(MediaContainer.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
  card: PropTypes.shape(Card.propTypes),
};

StandardPage.defaultProps = {
  siteHeader: {},
  pageHeader: {},
  mediaContainer: {},
  footer: {},
  card: {},
};

export default StandardPage;
