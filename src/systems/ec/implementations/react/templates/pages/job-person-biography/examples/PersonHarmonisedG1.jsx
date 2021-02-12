import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';

import getData from '@ecl/ec-specs-person-page/demo/data';

import PersonPage from '../src/PersonPage';

class PersonHarmonisedG1 extends React.Component {
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
    const data = getData('harmonised-g1');
    const dataCopy = JSON.parse(JSON.stringify(data));
    const pageHeaderClassName = classnames(
      'ecl-page-header-harmonised--group1'
    );

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
          {dataCopy.breadcrumbItems.map((item) => (
            <BreadcrumbHarmonisedItem {...item} key={item.label} />
          ))}
        </BreadcrumbHarmonised>
      );
      dataCopy.pageHeader.breadcrumb = breadcrumb;
    }

    return (
      <>
        <SiteHeaderHarmonised
          {...dataCopy.siteHeader}
          data-ecl-auto-init="SiteHeaderHarmonised"
          className="ecl-site-header-harmonised--group1"
        />
        <PageHeaderHarmonised
          {...dataCopy.pageHeader}
          className={pageHeaderClassName}
        />
        <PersonPage template="harmonised-g1" />
        <FooterHarmonised {...dataCopy.footer} />
      </>
    );
  }
}

PersonHarmonisedG1.propTypes = {
  siteHeaderLogin: PropTypes.bool,
  siteHeaderLangSelect: PropTypes.bool,
  siteHeaderSearch: PropTypes.bool,
  siteHeaderClassName: PropTypes.bool,
  siteHeaderMenu: PropTypes.bool,
  pageHeaderMeta: PropTypes.bool,
  pageHeaderIntro: PropTypes.bool,
  pageHeaderBreadcrumb: PropTypes.bool,
};

PersonHarmonisedG1.defaultProps = {
  siteHeaderLogin: true,
  siteHeaderLangSelect: true,
  siteHeaderSearch: true,
  siteHeaderClassName: true,
  siteHeaderMenu: true,
  pageHeaderMeta: true,
  pageHeaderIntro: true,
  pageHeaderBreadcrumb: true,
};

export default PersonHarmonisedG1;
