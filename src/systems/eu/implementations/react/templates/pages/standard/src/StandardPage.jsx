import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Card from '@ecl/eu-react-component-card';
import Footer from '@ecl/eu-react-component-footer';
import LanguageListOverlay from '@ecl/eu-react-component-language-list/src/LanguageListOverlay';
import MediaContainer from '@ecl/eu-react-component-media-container';
import PageHeader from '@ecl/eu-react-component-page-header';
import SiteHeader from '@ecl/eu-react-component-site-header';

const StandardPage = ({
  siteHeader,
  pageHeader,
  languageList,
  mediaContainer,
  footer,
  card,
}) => (
  <Fragment>
    <SiteHeader {...siteHeader} id="top" />
    <PageHeader {...pageHeader} />
    <LanguageListOverlay {...languageList} hidden="true" />
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
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  languageList: PropTypes.shape(LanguageListOverlay.propTypes),
  mediaContainer: PropTypes.shape(MediaContainer.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
  card: PropTypes.shape(Card.propTypes),
};

StandardPage.defaultProps = {
  siteHeader: {},
  pageHeader: {},
  languageList: {},
  mediaContainer: {},
  footer: {},
  card: {},
};

export default StandardPage;
