import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';

import NavigationLink from './NavigationLink';
import styles from './SingleLink.scss';

const SingleLink = React.memo(({ page, level }) => (
  <NavigationLink
    meta={page}
    className={`${styles['page-list-item']} ${styles[`level-${level}`]}`}
    activeClassName={styles['page-list-item--active']}
  >
    {/* page.status && (
      <span
        className={classnames(styles['page-status'], {
          [styles[`status-${page.status}`]]: true,
        })}
        title={page.status}
      />
      ) */}
    {page.title}
  </NavigationLink>
));

SingleLink.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
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

export default withRouter(SingleLink);
