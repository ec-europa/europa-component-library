/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import getData from '@ecl/ec-specs-main-policy-awareness-page/demo/data';

// import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';
import MainPolicyAwarenessPage from '../src/MainPolicyAwarenessPage';

class MainPolicyAwarenessExample extends React.Component {
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

    /*
    const { items, ...breadcrumbProps } = data.breadcrumb;
    const breadcrumb = (
      <Breadcrumb {...breadcrumbProps}>
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
    data.pageHeader.breadcrumb = breadcrumb;
    */

    return (
      <MainPolicyAwarenessPage
        siteHeader={data.siteHeader}
        // pageHeader={data.pageHeader}
        footer={data.footer}
        template={template}
      />
    );
  }
}

MainPolicyAwarenessExample.propTypes = {
  template: PropTypes.string.isRequired,
};

export default MainPolicyAwarenessExample;
