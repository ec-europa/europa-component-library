import React from 'react';
import PropTypes from 'prop-types';

import Blockquote from '@ecl/eu-react-component-blockquote/Blockquote';
import Card from '@ecl/eu-react-component-card/Card';
import Footer from '@ecl/eu-react-component-footer/Footer';
import MediaContainer from '@ecl/eu-react-component-media-container/MediaContainer';
import HeroBanner from '@ecl/eu-react-component-hero-banner/HeroBanner';
import SiteHeader from '@ecl/eu-react-component-site-header/SiteHeader';

const CampaignPage = ({
  siteHeader,
  heroBanner,
  mediaContainer,
  footer,
  card,
  blockquote,
  ...props
}) => (
  <div {...props}>
    <SiteHeader {...siteHeader} />
    <HeroBanner {...heroBanner} />
    <main className="ecl-u-pv-xl">
      <div className="ecl-container">
        <div className="ecl-row">
          <div className="ecl-col-sm-12 ecl-col-md-6">
            <MediaContainer {...mediaContainer} />
          </div>

          <div className="ecl-col-sm-12 ecl-col-md-6">Some text</div>
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
        <div className="ecl-row ecl-u-mt-l">
          <div className="ecl-col-sm-12 ecl-col-md-12">
            <Blockquote {...blockquote} />
          </div>
        </div>
      </div>
    </main>

    <Footer {...footer} />
  </div>
);

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
