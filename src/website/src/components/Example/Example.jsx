import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ children }) => (
  <main id="main-content" tabIndex="-1">
    <div className="custom-container tmp-u-pv-xl">
      <div className="tmp-editor">{children}</div>
    </div>
  </main>
);

Example.propTypes = {
  children: PropTypes.node,
};

Example.defaultProps = {
  children: null,
};

export default Example;
