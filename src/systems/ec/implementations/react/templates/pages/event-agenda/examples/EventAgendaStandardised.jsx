/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';

import BreadcrumbStandardised, {
  BreadcrumbStandardisedItem,
} from '@ecl/ec-react-component-breadcrumb-standardised';
import FooterStandardised from '@ecl/ec-react-component-footer-standardised';
import PageBanner from '@ecl/ec-react-component-page-banner';
import PageHeaderStandardised from '@ecl/ec-react-component-page-header-standardised';
import SiteHeaderStandardised from '@ecl/ec-react-component-site-header-standardised';

import getData from '@ecl/ec-specs-event-agenda-page/demo/data';

import EventAgendaPage from '../src/EventAgendaPage';

class EventAgendaStandardised extends React.Component {
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
    const data = getData('standardised');

    const breadcrumb = (
      <BreadcrumbStandardised
        {...data.breadcrumbContent}
        data-ecl-auto-init="BreadcrumbStandardised"
      >
        {data.breadcrumbItems.map(item => (
          <BreadcrumbStandardisedItem {...item} key={item.label} />
        ))}
      </BreadcrumbStandardised>
    );
    data.pageHeader.breadcrumb = breadcrumb;

    return (
      <Fragment>
        <SiteHeaderStandardised
          {...data.siteHeader}
          data-ecl-auto-init="SiteHeaderStandardised"
        />
        <PageHeaderStandardised {...data.pageHeader} />
        <EventAgendaPage template="standardised" />
        <PageBanner {...data.pageBanner} variant="default" isCentered />
        <FooterStandardised {...data.footer} />
      </Fragment>
    );
  }
}

export default EventAgendaStandardised;
