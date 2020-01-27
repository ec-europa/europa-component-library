/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';

import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';

import getData from '@ecl/ec-specs-main-policy-legislation-page/demo/data';

import MainPolicyLegislationPage from '../src/MainPolicyLegislationPage';

class MainPolicyLegislationHarmonisedG2 extends React.Component {
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
    const data = getData('harmonised-g2');

    const breadcrumb = (
      <BreadcrumbHarmonised
        {...data.breadcrumbContent}
        data-ecl-auto-init="BreadcrumbHarmonised"
        className="ecl-breadcrumb-harmonised--group2"
      >
        {data.breadcrumbItems.map(item => (
          <BreadcrumbHarmonisedItem {...item} key={item.label} />
        ))}
      </BreadcrumbHarmonised>
    );
    data.pageHeader.breadcrumb = breadcrumb;

    return (
      <Fragment>
        <SiteHeaderHarmonised
          {...data.siteHeader}
          data-ecl-auto-init="SiteHeaderHarmonised"
          className="ecl-site-header-harmonised--group2"
        />
        <PageHeaderHarmonised
          {...data.pageHeader}
          className="ecl-page-header-harmonised--group2"
        />
        <MainPolicyLegislationPage template="harmonised-g2" />
        <FooterHarmonised
          {...data.footer}
          className="ecl-footer-harmonised--group2"
        />
      </Fragment>
    );
  }
}

export default MainPolicyLegislationHarmonisedG2;
