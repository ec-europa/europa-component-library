import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import FooterCore from '@ecl/ec-react-component-footer-core';
import PageHeaderCore from '@ecl/ec-react-component-page-header-core';
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';

import getData from '@ecl/ec-specs-department-page/demo/data';

import DepartmentPage from '../src/DepartmentPage';

class DepartmentCore extends React.Component {
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
    const data = getData('core');
    const dataCopy = JSON.parse(JSON.stringify(data));
    const pageHeaderClassName = classnames({
      'ecl-u-pt-xl': !optional.pageHeaderBreadcrumb,
    });

    // Optional items
    if (!optional.siteHeaderLogin) {
      delete dataCopy.siteHeader.loginToggle;
      delete dataCopy.siteHeader.loginBox;
    }

    if (!optional.pageHeaderMeta) {
      delete dataCopy.pageHeader.meta;
    }

    if (!optional.pageHeaderIntro) {
      delete dataCopy.pageHeader.description;
    }

    if (optional.pageHeaderBreadcrumb) {
      const breadcrumb = (
        <BreadcrumbCore
          {...dataCopy.breadcrumbContent}
          data-ecl-auto-init="BreadcrumbHarmonised"
          className="ecl-breadcrumb-harmonised--group1"
        >
          {dataCopy.breadcrumbItems.map((item) => (
            <BreadcrumbCoreItem {...item} key={item.label} />
          ))}
        </BreadcrumbCore>
      );
      dataCopy.pageHeader.breadcrumb = breadcrumb;
    }

    return (
      <>
        <SiteHeaderCore
          {...dataCopy.siteHeader}
          data-ecl-auto-init="SiteHeaderCore"
        />
        <PageHeaderCore
          {...dataCopy.pageHeader}
          className={pageHeaderClassName}
        />
        <DepartmentPage template="core" />
        <FooterCore {...dataCopy.footer} />
      </>
    );
  }
}

DepartmentCore.propTypes = {
  siteHeaderLogin: PropTypes.bool,
  pageHeaderMeta: PropTypes.bool,
  pageHeaderIntro: PropTypes.bool,
  pageHeaderBreadcrumb: PropTypes.bool,
};

DepartmentCore.defaultProps = {
  siteHeaderLogin: true,
  pageHeaderMeta: true,
  pageHeaderIntro: true,
  pageHeaderBreadcrumb: PropTypes.bool,
};

export default DepartmentCore;
