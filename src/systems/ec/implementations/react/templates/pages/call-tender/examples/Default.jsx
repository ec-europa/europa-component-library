/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import getData from '@ecl/ec-specs-call-tender-page/demo/data';

import CallTenderPage from '../src/CallTenderPage';

class CallTenderExample extends React.Component {
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
      <CallTenderPage
        siteHeader={data.siteHeader}
        footer={data.footer}
        template={template}
      />
    );
  }
}

CallTenderExample.propTypes = {
  template: PropTypes.string.isRequired,
};

export default CallTenderExample;
