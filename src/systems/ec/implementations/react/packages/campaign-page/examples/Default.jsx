/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import siteHeaderContent from '@ecl/ec-specs-site-header/demo/data';
import heroBannerContent from '@ecl/ec-specs-hero-banner/demo/data--image';
import mediaContainerContent from '@ecl/ec-specs-media-container/demo/data--video';
import cardContent from '@ecl/ec-specs-card/demo/data--card-event';
import blockquoteContent from '@ecl/ec-specs-blockquote/demo/data';
import footerContent from '@ecl/ec-specs-footer/demo/data';

import CampaignPage from '../CampaignPage';

export default () => (
  <CampaignPage
    siteHeader={siteHeaderContent}
    heroBanner={heroBannerContent}
    card={cardContent}
    footer={footerContent}
    mediaContainer={mediaContainerContent}
    blockquote={blockquoteContent}
  />
);
