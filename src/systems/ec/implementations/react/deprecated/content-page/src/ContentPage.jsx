import React from 'react';
import PropTypes from 'prop-types';

import Footer from '@ecl/ec-react-component-footer';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation/src/InpageNavigation';
import PageHeader from '@ecl/ec-react-component-page-header';
import SiteHeader from '@ecl/ec-react-component-site-header';
import data from '@ecl/ec-specs-content-page/demo/data';

function ContentPage({ siteHeader, pageHeader, footer, inpageNavigation }) {
  return (
    <>
      <SiteHeader {...siteHeader} data-ecl-auto-init="SiteHeader" />
      <PageHeader {...pageHeader} />
      <div className="ecl-container">
        <div
          className="ecl-row ecl-u-mt-l"
          data-ecl-inpage-navigation-container
        >
          <div className="ecl-col-md-3">
            <InpageNavigation
              {...inpageNavigation}
              data-ecl-auto-init="InpageNavigation"
            />
          </div>
          <div className="ecl-col-md-9">
            <h2
              className="ecl-u-type-heading-2 ecl-u-type-color-black"
              id="inline-nav-1"
            >
              Heading 1
            </h2>
            <p className="ecl-u-type-paragraph-m ecl-u-type-color-grey">
              {data.demoText}
            </p>
            <h2
              className="ecl-u-type-heading-2 ecl-u-type-color-black"
              id="inline-nav-2"
            >
              Heading 2
            </h2>
            <p className="ecl-u-type-paragraph-m ecl-u-type-color-grey">
              {data.demoText}
            </p>
            <h2
              className="ecl-u-type-heading-2 ecl-u-type-color-black"
              id="inline-nav-3"
            >
              Heading 3
            </h2>
            <p className="ecl-u-type-paragraph-m ecl-u-type-color-grey">
              {data.demoText}
            </p>
            <h2
              className="ecl-u-type-heading-2 ecl-u-type-color-black"
              id="inline-nav-4"
            >
              Heading 4
            </h2>
            <p className="ecl-u-type-paragraph-m ecl-u-type-color-grey">
              {data.demoText}
            </p>
          </div>
        </div>
      </div>
      <Footer {...footer} />
    </>
  );
}

ContentPage.propTypes = {
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
  inpageNavigation: PropTypes.shape(InpageNavigation.propTypes),
};

ContentPage.defaultProps = {
  siteHeader: {},
  pageHeader: {},
  footer: {},
  inpageNavigation: {},
};

export default ContentPage;
