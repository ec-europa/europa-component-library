/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import PageBanner from '@ecl/ec-react-component-page-banner';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';

import getData from '@ecl/ec-specs-event-detail-page/demo/data';

import EventDetailPage from '../src/EventDetailPage';

class EventDetailHarmonisedG1 extends React.Component {
  constructor(props) {
    super(props);
    this.components = null;
  }

  componentDidMount() {
    if (!window.ECL) return;
    this.components = window.ECL.autoInit();
  }

  componentDidUpdate() {
    if (!window.ECL) return;

    if (this.components) {
      this.components.forEach(c => c.destroy());
    }

    this.components = window.ECL.autoInit();
  }

  componentWillUnmount() {
    if (!window.ECL) return;

    if (this.components) {
      this.components.forEach(c => c.destroy());
    }
  }

  render() {
    const optional = this.props;
    const data = getData('harmonised-g1');
    const dataCopy = JSON.parse(JSON.stringify(data));

    // Optional items
    if (!optional.siteHeaderLogin) {
      delete dataCopy.siteHeader.loginToggle;
      delete dataCopy.siteHeader.loginBox;
    }

    if (!optional.siteHeaderLangSelect) {
      delete dataCopy.siteHeader.languageSelector;
    }

    if (!optional.siteHeaderSearch) {
      delete dataCopy.siteHeader.searchToggle;
      delete dataCopy.siteHeader.searchForm;
    }

    if (!optional.siteHeaderClassName) {
      delete dataCopy.siteHeader.bannerTop;
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
        <BreadcrumbHarmonised
          {...dataCopy.breadcrumbContent}
          data-ecl-auto-init="BreadcrumbHarmonised"
          className="ecl-breadcrumb-harmonised--group1"
        >
          {dataCopy.breadcrumbItems.map(item => (
            <BreadcrumbHarmonisedItem {...item} key={item.label} />
          ))}
        </BreadcrumbHarmonised>
      );
      dataCopy.pageHeader.breadcrumb = breadcrumb;
    }

    return (
      <Fragment>
        <SiteHeaderHarmonised
          {...dataCopy.siteHeader}
          data-ecl-auto-init="SiteHeaderHarmonised"
          className="ecl-site-header-harmonised--group1"
        />
        <PageHeaderHarmonised
          {...dataCopy.pageHeader}
          className="ecl-page-header-harmonised--group1"
        />
        <EventDetailPage template="harmonised-g1" />
        <PageBanner {...dataCopy.pageBanner} variant="default" isCentered />
        <FooterHarmonised {...dataCopy.footer} />
      </Fragment>
    );
  }
}

EventDetailHarmonisedG1.propTypes = {
  siteHeaderLogin: PropTypes.bool,
  siteHeaderLangSelect: PropTypes.bool,
  siteHeaderSearch: PropTypes.bool,
  siteHeaderClassName: PropTypes.bool,
  siteHeaderMenu: PropTypes.bool,
  pageHeaderMeta: PropTypes.bool,
  pageHeaderIntro: PropTypes.bool,
  pageHeaderBreadcrumb: PropTypes.bool,
};

EventDetailHarmonisedG1.defaultProps = {
  siteHeaderLogin: true,
  siteHeaderLangSelect: true,
  siteHeaderSearch: true,
  siteHeaderClassName: true,
  siteHeaderMenu: true,
  pageHeaderMeta: true,
  pageHeaderIntro: true,
  pageHeaderBreadcrumb: true,
};

export default EventDetailHarmonisedG1;
