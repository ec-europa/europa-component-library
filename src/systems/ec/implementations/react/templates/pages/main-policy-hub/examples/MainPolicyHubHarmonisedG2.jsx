/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';

import getData from '@ecl/ec-specs-main-policy-hub-page/demo/data';

import MainPolicyHubPage from '../src/MainPolicyHubPage';

class MainPolicyHubHarmonisedG2 extends React.Component {
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
    const data = getData('harmonised-g2');
    const dataCopy = JSON.parse(JSON.stringify(data));
    const pageHeaderClassName = classnames(
      'ecl-page-header-harmonised--group2',
      {
        'ecl-u-pt-xl': !optional.pageHeaderBreadcrumb,
      }
    );

    // Optional items
    if (!optional.siteHeaderLangSelect) {
      delete dataCopy.siteHeader.languageSelector;
    }

    if (!optional.siteHeaderSearch) {
      delete dataCopy.siteHeader.searchToggle;
      delete dataCopy.siteHeader.searchForm;
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
          className="ecl-breadcrumb-harmonised--group2"
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
          className="ecl-site-header-harmonised--group2"
        />
        <PageHeaderHarmonised
          {...dataCopy.pageHeader}
          className={pageHeaderClassName}
        />
        <MainPolicyHubPage template="harmonised-g2" />
        <FooterHarmonised
          {...dataCopy.footer}
          className="ecl-footer-harmonised--group2"
        />
      </Fragment>
    );
  }
}

MainPolicyHubHarmonisedG2.propTypes = {
  siteHeaderLangSelect: PropTypes.bool,
  siteHeaderSearch: PropTypes.bool,
  siteHeaderMenu: PropTypes.bool,
  pageHeaderMeta: PropTypes.bool,
  pageHeaderIntro: PropTypes.bool,
  pageHeaderBreadcrumb: PropTypes.bool,
};

MainPolicyHubHarmonisedG2.defaultProps = {
  siteHeaderLangSelect: true,
  siteHeaderSearch: true,
  siteHeaderMenu: true,
  pageHeaderMeta: true,
  pageHeaderIntro: true,
  pageHeaderBreadcrumb: true,
};

export default MainPolicyHubHarmonisedG2;
