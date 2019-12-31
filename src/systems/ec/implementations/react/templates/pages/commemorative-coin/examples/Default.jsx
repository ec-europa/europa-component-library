/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import getData from '@ecl/ec-specs-commemorative-coin-page/demo/data';

import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import BreadcrumbStandardised, {
  BreadcrumbStandardisedItem,
} from '@ecl/ec-react-component-breadcrumb-standardised';
import CommemorativeCoinPage from '../src/CommemorativeCoinPage';

class CommemorativeCoinPageExample extends React.Component {
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
    const { template } = this.props;
    const data = getData(template);

    let Breadcrumb = null;
    let BreadcrumbItem = null;

    if (template === 'core') {
      Breadcrumb = BreadcrumbCore;
      BreadcrumbItem = BreadcrumbCoreItem;
    } else if (template === 'standardised') {
      Breadcrumb = BreadcrumbStandardised;
      BreadcrumbItem = BreadcrumbStandardisedItem;
    } else {
      Breadcrumb = BreadcrumbHarmonised;
      BreadcrumbItem = BreadcrumbHarmonisedItem;
    }

    const { items, ...breadcrumbProps } = data.breadcrumb;
    const breadcrumb = (
      <Breadcrumb {...breadcrumbProps}>
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
    data.pageHeader.breadcrumb = breadcrumb;

    return (
      <CommemorativeCoinPage
        siteHeader={data.siteHeader}
        pageHeader={data.pageHeader}
        footer={data.footer}
        template={template}
      />
    );
  }
}

CommemorativeCoinPageExample.propTypes = {
  template: PropTypes.string.isRequired,
};

export default CommemorativeCoinPageExample;
