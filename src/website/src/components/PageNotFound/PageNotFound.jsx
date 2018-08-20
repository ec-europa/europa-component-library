import React from 'react';
import PropTypes from 'prop-types';

const PageNotFound = ({ children }) => (
  <main id="main-content" tabIndex="-1">
    <div className="custom-container tmp-u-pv-xl">
      <div className="custom-row tmp-u-mt-xl tmp-editor">{children}</div>
    </div>
  </main>
);

PageNotFound.propTypes = {
  children: PropTypes.node,
};

PageNotFound.defaultProps = {
  children: null,
};

export default PageNotFound;
