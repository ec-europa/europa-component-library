import React from 'react';
import PropTypes from 'prop-types';

import grid from '../../styles/grid.scss';
import utilities from '../../styles/utilities.scss';

const PageNotFound = ({ children }) => (
  <main id="main-content" tabIndex="-1">
    <div className={`${grid.container} ${utilities['pv-xl']}`}>
      <div className={`${grid.row} ${utilities['mt-xl']}`}>{children}</div>
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
