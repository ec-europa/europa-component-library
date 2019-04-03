import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainContainer.scss';

const MainContainer = React.memo(({ children, forceRefresh, sidebarOpen }) => (
  <div
    className={`${styles.container}${
      sidebarOpen ? ` ${styles['container--with-sidebar']}` : ''
    }${forceRefresh ? ' ' : ''}`}
  >
    {children}
  </div>
));

MainContainer.propTypes = {
  children: PropTypes.node,
  sidebarOpen: PropTypes.bool,
  forceRefresh: PropTypes.bool,
};

MainContainer.defaultProps = {
  children: null,
  sidebarOpen: false,
  forceRefresh: false,
};

export default MainContainer;
