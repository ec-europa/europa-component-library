import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Card from '@ecl/ec-react-component-card';
import Footer from '@ecl/ec-react-component-footer';
import LanguageListOverlay from '@ecl/ec-react-component-language-list/src/LanguageListOverlay';
import MediaContainer from '@ecl/ec-react-component-media-container';
import PageHeader from '@ecl/ec-react-component-page-header';
import SiteHeader from '@ecl/ec-react-component-site-header';

const EventDetailPage = ({
  siteHeader,
  pageHeader,
  languageList,
  mediaContainer,
  footer,
  card,
}) => (
  <Fragment>
    <SiteHeader {...siteHeader} />
    <LanguageListOverlay {...languageList} hidden="true" />
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

EventDetailPage.propTypes = {
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  mediaContainer: PropTypes.shape(MediaContainer.propTypes),
  languageList: PropTypes.shape(LanguageListOverlay.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
  card: PropTypes.shape(Card.propTypes),
};

EventDetailPage.defaultProps = {
  siteHeader: {},
  pageHeader: {},
  languageList: {},
  mediaContainer: {},
  footer: {},
  card: {},
};

export default EventDetailPage;
