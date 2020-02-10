/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';

import getData from '@ecl/ec-specs-main-policy-evaluation-page/demo/data';

import MainPolicyEvaluationPage from '../src/MainPolicyEvaluationPage';

class MainPolicyEvaluationHarmonisedG2 extends React.Component {
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
    const data = getData('harmonised-g2');
    const dataCopy = JSON.parse(JSON.stringify(data));

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
          className="ecl-page-header-harmonised--group2"
        />
        <MainPolicyEvaluationPage template="harmonised-g2" />
        <FooterHarmonised
          {...dataCopy.footer}
          className="ecl-footer-harmonised--group2"
        />
      </Fragment>
    );
  }
}

MainPolicyEvaluationHarmonisedG2.propTypes = {
  siteHeaderLangSelect: PropTypes.bool,
  siteHeaderSearch: PropTypes.bool,
  siteHeaderMenu: PropTypes.bool,
  pageHeaderMeta: PropTypes.bool,
  pageHeaderIntro: PropTypes.bool,
  pageHeaderBreadcrumb: PropTypes.bool,
};

MainPolicyEvaluationHarmonisedG2.defaultProps = {
  siteHeaderLangSelect: true,
  siteHeaderSearch: true,
  siteHeaderMenu: true,
  pageHeaderMeta: true,
  pageHeaderIntro: true,
  pageHeaderBreadcrumb: true,
};

export default MainPolicyEvaluationHarmonisedG2;
