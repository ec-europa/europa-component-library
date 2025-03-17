import React from 'react';
import PropTypes from 'prop-types';

import NavigationLink from './NavigationLink';
import styles from './SingleLink.module.scss';

const SingleLink = React.memo(({ page, level }) => (
  <NavigationLink
    meta={page}
    className={({ isActive }) =>
      `${styles['page-list-item']} ${styles[`level-${level}`]} ${
        isActive ? styles['page-list-item--active'] : ''
      }`
    }
  >
    {page.title}
  </NavigationLink>
));

SingleLink.propTypes = {
  page: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  level: PropTypes.number,
};

SingleLink.defaultProps = {
  level: 0,
};

export default SingleLink;
