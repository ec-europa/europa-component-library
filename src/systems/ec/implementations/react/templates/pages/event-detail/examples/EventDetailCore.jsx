/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';

import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import FooterCore from '@ecl/ec-react-component-footer-core';
import PageBanner from '@ecl/ec-react-component-page-banner';
import PageHeaderCore from '@ecl/ec-react-component-page-header-core';
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';

import getData from '@ecl/ec-specs-event-detail-page/demo/data';

import EventDetailPage from '../src/EventDetailPage';

class EventDetailCore extends React.Component {
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
    const data = getData('core');

    const breadcrumb = (
      <BreadcrumbCore
        {...data.breadcrumbContent}
        data-ecl-auto-init="BreadcrumbCore"
      >
        {data.breadcrumbItems.map(item => (
          <BreadcrumbCoreItem {...item} key={item.label} />
        ))}
      </BreadcrumbCore>
    );
    data.pageHeader.breadcrumb = breadcrumb;

    return (
      <Fragment>
        <SiteHeaderCore
          {...data.siteHeader}
          data-ecl-auto-init="SiteHeaderCore"
        />
        <PageHeaderCore {...data.pageHeader} />
        <EventDetailPage template="core" />
        <PageBanner {...data.pageBanner} variant="default" isCentered />
        <FooterCore {...data.footer} />
      </Fragment>
    );
  }
}

export default EventDetailCore;
