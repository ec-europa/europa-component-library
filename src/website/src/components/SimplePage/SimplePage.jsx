import React from 'react';
import PropTypes from 'prop-types';

import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

import grid from '../../styles/grid.scss';
import utilities from '../../styles/utilities.scss';

const HomePage = ({ children }) => (
  <main id="main-content" tabIndex="-1">
    <ScrollToTopOnMount />
    <div className={`${grid.container} ${utilities['pv-xl']}`}>{children}</div>
  </main>
);

HomePage.propTypes = {
  children: PropTypes.node,
};

HomePage.defaultProps = {
  children: null,
};

export default HomePage;
