/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import BreadcrumbStandardised, {
  BreadcrumbStandardisedItem,
} from '@ecl/ec-react-component-breadcrumb-standardised';
import FooterStandardised from '@ecl/ec-react-component-footer-standardised';
import PageHeaderStandardised from '@ecl/ec-react-component-page-header-standardised';
import SiteHeaderStandardised from '@ecl/ec-react-component-site-header-standardised';

import getData from '@ecl/ec-specs-call-tenders-page/demo/data';

import CallTendersPage from '../src/CallTendersPage';

class CallTendersStandardised extends React.Component {
  constructor(props) {
    super(props);
    this.autoinit = null;
  }

  componentDidMount() {
    if (!window.ECL) return;
    this.autoinit = window.ECL.autoInit();
  }

  componentDidUpdate() {
    if (!window.ECL) return;
    this.autoinit.update();
  }

  componentWillUnmount() {
    if (!window.ECL) return;
    this.autoinit.destroy();
  }

  render() {
    const optional = this.props;
    const data = getData('standardised');
    const dataCopy = JSON.parse(JSON.stringify(data));

    // Optional items
    if (!optional.siteHeaderLogin) {
      delete dataCopy.siteHeader.loginToggle;
      delete dataCopy.siteHeader.loginBox;
    }

    if (!optional.siteHeaderLangSelect) {
      delete dataCopy.siteHeader.languageSelector;
    }

    if (optional.siteHeaderMenu) {
      delete dataCopy.siteHeader.banner;
    } else {
      delete dataCopy.siteHeader.menu;
    }

    if (!optional.pageHeaderMeta) {
      delete dataCopy.pageHeader.meta;
    }

    if (!optional.pageHeaderIntro) {
      delete dataCopy.pageHeader.description;
    }

    if (optional.pageHeaderBreadcrumb) {
      const breadcrumb = (
        <BreadcrumbStandardised
          {...dataCopy.breadcrumbContent}
          data-ecl-auto-init="BreadcrumbStandardised"
        >
          {dataCopy.breadcrumbItems.map(item => (
            <BreadcrumbStandardisedItem {...item} key={item.label} />
          ))}
        </BreadcrumbStandardised>
      );
      dataCopy.pageHeader.breadcrumb = breadcrumb;
    }

    return (
      <Fragment>
        <SiteHeaderStandardised
          {...dataCopy.siteHeader}
          data-ecl-auto-init="SiteHeaderStandardised"
        />
        <PageHeaderStandardised {...dataCopy.pageHeader} />
        <CallTendersPage template="standardised" />
        <FooterStandardised {...dataCopy.footer} />
      </Fragment>
    );
  }
}

CallTendersStandardised.propTypes = {
  siteHeaderLogin: PropTypes.bool,
  siteHeaderLangSelect: PropTypes.bool,
  siteHeaderMenu: PropTypes.bool,
  pageHeaderMeta: PropTypes.bool,
  pageHeaderIntro: PropTypes.bool,
  pageHeaderBreadcrumb: PropTypes.bool,
};

CallTendersStandardised.defaultProps = {
  siteHeaderLogin: true,
  siteHeaderLangSelect: true,
  siteHeaderMenu: true,
  pageHeaderMeta: true,
  pageHeaderIntro: true,
  pageHeaderBreadcrumb: true,
};

export default CallTendersStandardised;
