import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Footer from '@ecl/ec-react-component-footer';
import LanguageListOverlay from '@ecl/ec-react-component-language-list/src/LanguageListOverlay';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation/src/InpageNavigation';
import PageHeader from '@ecl/ec-react-component-page-header';
import SiteHeader from '@ecl/ec-react-component-site-header';
import data from '@ecl/ec-specs-content-page/demo/data';

const ContentPage = ({
  siteHeader,
  pageHeader,
  languageList,
  footer,
  inpageNavigation,
}) => (
  <Fragment>
    <SiteHeader {...siteHeader} />
    <LanguageListOverlay {...languageList} hidden="true" />
    <PageHeader {...pageHeader} />
    <div className="ecl-container">
      <div className="ecl-row ecl-u-mt-l">
        <div className="ecl-col-md-3">
          <InpageNavigation {...inpageNavigation} />
        </div>

        <div className="ecl-col-md-9">
          <h2 className="ecl-u-type-heading-2" id="inline-nav-1">
            Heading 1
          </h2>
          <p className="ecl-u-type-paragraph-m">{data.demoText}</p>
          <h2 className="ecl-u-type-heading-2" id="inline-nav-2">
            Heading 2
          </h2>
          <p className="ecl-u-type-paragraph-m">{data.demoText}</p>
          <h2 className="ecl-u-type-heading-2" id="inline-nav-3">
            Heading 3
          </h2>
          <p className="ecl-u-type-paragraph-m">{data.demoText}</p>
          <h2 className="ecl-u-type-heading-2" id="inline-nav-4">
            Heading 4
          </h2>
          <p className="ecl-u-type-paragraph-m">{data.demoText}</p>
        </div>
      </div>
    </div>
    <Footer {...footer} />
  </Fragment>
);

ContentPage.propTypes = {
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  languageList: PropTypes.shape(LanguageListOverlay.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
  inpageNavigation: PropTypes.shape(InpageNavigation.propTypes),
};

ContentPage.defaultProps = {
  siteHeader: {},
  pageHeader: {},
  languageList: {},
  footer: {},
  inpageNavigation: {},
};

export default ContentPage;
