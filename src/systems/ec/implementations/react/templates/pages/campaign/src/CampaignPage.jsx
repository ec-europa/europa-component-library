import React from 'react';
import PropTypes from 'prop-types';

import Blockquote from '@ecl/ec-react-component-blockquote';
import Card from '@ecl/ec-react-component-card';
import Footer from '@ecl/ec-react-component-footer-harmonised';
import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import MediaContainer from '@ecl/ec-react-component-media-container';
import HeroBanner from '@ecl/ec-react-component-hero-banner';
import SiteHeader from '@ecl/ec-react-component-site-header-harmonised';
import SkipLink from '@ecl/ec-react-component-skip-link';

function CampaignPage({
  siteHeader,
  heroBanner,
  mediaContainer,
  footer,
  card,
  blockquote,
}) {
  return (
    <>
      <SkipLink href="#main" label="Skip to main content" />
      <SiteHeader
        {...siteHeader}
        id="top"
        data-ecl-auto-init="SiteHeaderHarmonised"
        className="ecl-site-header-harmonised--group2"
      />
      <HeroBanner {...heroBanner} />
      <main className="ecl-u-pv-xl" id="main">
        <div className="ecl-container">
          <div className="ecl-row">
            <div className="ecl-col-sm-12 ecl-col-md-6">
              <MediaContainer {...mediaContainer} />
            </div>
            <div className="ecl-col-sm-12 ecl-col-md-6">
              <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
                The European Commission has put forward ambitious yet realistic
                proposals for a modern EU budget. It is time for an EU budget
                that reflects rapid developments in innovation, the economy, the
                environment and geopolitics, amongst others. The Commission is
                putting forward modern, clearer and simpler EU financial rules
                that make sure the EU budget delivers on the issues that matter
                to Europeans.
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
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
              <Icon size="m" shape="notifications--information" />
              &nbsp; To insert social media sharing here, please use the{' '}
              <Link
                href="https://webgate.ec.europa.eu/fpfis/wikis/pages/viewpage.action?pageId=105090808"
                label="widget provided by Webtools"
              />
              .
            </p>
          </div>
        </div>
      </main>
      <Footer {...footer} className="ecl-footer-harmonised--group2" />
    </>
  );
}

CampaignPage.propTypes = {
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  heroBanner: PropTypes.shape(HeroBanner.propTypes),
  mediaContainer: PropTypes.shape(MediaContainer.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
  card: PropTypes.shape(Card.propTypes),
  blockquote: PropTypes.shape(Blockquote.propTypes),
};

CampaignPage.defaultProps = {
  siteHeader: {},
  heroBanner: {},
  mediaContainer: {},
  footer: {},
  card: {},
  blockquote: {},
};

export default CampaignPage;
