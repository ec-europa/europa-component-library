/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Col from '../../../website/src/components/Grid/Col';
import Row from '../../../website/src/components/Grid/Row';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Row style={{ border: 'red' }}>
        {React.Children.map(children, child => (
          <Col col="col-4/4 col-md-4/8 col-xl-4/12" spacing="mt-m">
            {child}
          </Col>
        ))}
      </Row>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
