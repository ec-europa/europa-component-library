import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Blockquote from '@ecl/eu-react-component-blockquote';
import Card from '@ecl/eu-react-component-card';
import Footer from '@ecl/eu-react-component-footer';
import Icon from '@ecl/eu-react-component-icon';
import LanguageListOverlay from '@ecl/eu-react-component-language-list/src/LanguageListOverlay';
import Link from '@ecl/eu-react-component-link';
import MediaContainer from '@ecl/eu-react-component-media-container';
import HeroBanner from '@ecl/eu-react-component-hero-banner';
import SiteHeader from '@ecl/eu-react-component-site-header';

const CampaignPage = ({
  siteHeader,
  heroBanner,
  languageList,
  mediaContainer,
  footer,
  card,
  blockquote,
}) => (
  <Fragment>
    <SiteHeader {...siteHeader} id="top" />
    <LanguageListOverlay {...languageList} hidden="true" />
    <HeroBanner {...heroBanner} />
    <main className="ecl-u-pv-xl">
      <div className="ecl-container">
        <div className="ecl-row">
          <div className="ecl-col-sm-12 ecl-col-md-6">
            <MediaContainer {...mediaContainer} />
          </div>

          <div className="ecl-col-sm-12 ecl-col-md-6">
            <p className="ecl-u-type-paragraph">
              The European Commission has put forward ambitious yet realistic
              proposals for a modern EU budget. It is time for an EU budget that
              reflects rapid developments in innovation, the economy, the
              environment and geopolitics, amongst others. The Commission is
              putting forward modern, clearer and simpler EU financial rules
              that ensure the EU budget delivers on the issues that matter to
              Europeans.
            </p>
          </div>
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

        <div className="ecl-row ecl-u-mt-l ecl-u-mb-xl">
          <div className="ecl-col-sm-12 ecl-col-md-6">
            <Blockquote {...blockquote} />
          </div>
        </div>

        <div id="social-media-sharing">
          <p className="ecl-u-type-paragraph">
            <Icon size="m" shape="notifications--information" />
            &nbsp; To insert social media sharing here, please use&nbsp;
            <Link
              href="https://webgate.ec.europa.eu/fpfis/wikis/pages/viewpage.action?pageId=105090808"
              label="the widget provided by Webtools"
            />
          </p>
        </div>
      </div>
    </main>

    <Footer {...footer} />
  </Fragment>
);

CampaignPage.propTypes = {
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  heroBanner: PropTypes.shape(HeroBanner.propTypes),
  languageList: PropTypes.shape(LanguageListOverlay.propTypes),
  mediaContainer: PropTypes.shape(MediaContainer.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
  card: PropTypes.shape(Card.propTypes),
  blockquote: PropTypes.shape(Blockquote.propTypes),
};

CampaignPage.defaultProps = {
  siteHeader: {},
  heroBanner: {},
  languageList: {},
  mediaContainer: {},
  footer: {},
  card: {},
  blockquote: {},
};

export default CampaignPage;
