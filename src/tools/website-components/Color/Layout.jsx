/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Col from '../../../website/src/components/Grid/Col';
import Row from '../../../website/src/components/Grid/Row';

class Layout extends PureComponent {
  render() {
    const { cols, children } = this.props;

    return (
      <Row style={{ border: 'red' }}>
        {React.Children.map(children, child => (
          <Col col={cols} spacing="mt-m" flex>
            {child}
          </Col>
        ))}
      </Row>
    );
  }
}

Layout.propTypes = {
  cols: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  cols: '12 md-6 xl-4',
};

export default Layout;
