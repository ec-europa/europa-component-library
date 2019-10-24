/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import getData from '@ecl/ec-specs-main-policy-resources-page/demo/data';

import MainPolicyResourcesPage from '../src/MainPolicyResourcesPage';

class MainPolicyResourcesExample extends React.Component {
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

    return (
      <MainPolicyResourcesPage
        siteHeader={data.siteHeader}
        footer={data.footer}
        template={template}
      />
    );
  }
}

MainPolicyResourcesExample.propTypes = {
  template: PropTypes.string.isRequired,
};

export default MainPolicyResourcesExample;
