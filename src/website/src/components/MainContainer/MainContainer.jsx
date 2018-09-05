import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainContainer.scss';

const MainContainer = ({ children, sidebarOpen }) => (
  <div
    className={`${styles.container}${
      sidebarOpen ? ` ${styles['container--with-sidebar']}` : ''
    }`}
  >
    {children}
  </div>
);

MainContainer.propTypes = {
  children: PropTypes.node,
  sidebarOpen: PropTypes.bool,
};

MainContainer.defaultProps = {
  children: null,
  sidebarOpen: false,
};

export default MainContainer;
