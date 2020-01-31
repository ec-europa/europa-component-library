/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import FooterCore from '@ecl/ec-react-component-footer-core';
import PageHeaderCore from '@ecl/ec-react-component-page-header-core';
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';

import getData from '@ecl/ec-specs-main-policy-resources-page/demo/data';

import MainPolicyResourcesPage from '../src/MainPolicyResourcesPage';

class MainPolicyResourcesCore extends React.Component {
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
    const data = getData('core');
    const dataCopy = JSON.parse(JSON.stringify(data));

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

    const breadcrumb = (
      <BreadcrumbCore
        {...dataCopy.breadcrumbContent}
        data-ecl-auto-init="BreadcrumbCore"
      >
        {dataCopy.breadcrumbItems.map(item => (
          <BreadcrumbCoreItem {...item} key={item.label} />
        ))}
      </BreadcrumbCore>
    );
    dataCopy.pageHeader.breadcrumb = breadcrumb;

    return (
      <Fragment>
        <SiteHeaderCore
          {...dataCopy.siteHeader}
          data-ecl-auto-init="SiteHeaderCore"
        />
        <PageHeaderCore {...dataCopy.pageHeader} />
        <MainPolicyResourcesPage template="core" />
        <FooterCore {...dataCopy.footer} />
      </Fragment>
    );
  }
}

MainPolicyResourcesCore.propTypes = {
  siteHeaderLogin: PropTypes.bool,
  pageHeaderMeta: PropTypes.bool,
  pageHeaderIntro: PropTypes.bool,
};

MainPolicyResourcesCore.defaultProps = {
  siteHeaderLogin: true,
  pageHeaderMeta: true,
  pageHeaderIntro: true,
};

export default MainPolicyResourcesCore;
