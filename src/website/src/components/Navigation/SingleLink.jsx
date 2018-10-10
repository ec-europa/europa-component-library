import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import NavigationLink from './NavigationLink';
import styles from './SingleLink.scss';

class SingleLink extends PureComponent {
  render() {
    const { page, showStatus, level } = this.props;

    return (
      <NavigationLink
        meta={page}
        className={`${styles['page-list-item']} ${styles[`level-${level}`]}`}
        activeClassName={styles['page-list-item--active']}
      >
        {showStatus && (
          <Fragment>
            {page.ready ? (
              <span
                className={styles['page-status']}
                style={{
                  backgroundColor: '#467a39',
                }}
                title="Ready"
              />
            ) : (
              <span
                className={styles['page-status']}
                style={{
                  backgroundColor: '#f29527',
                }}
                title="Not ready"
              />
            )}
          </Fragment>
        )}
        {page.title}
      </NavigationLink>
    );
  }
}

SingleLink.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  page: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  showStatus: PropTypes.bool,
  level: PropTypes.number,
};

SingleLink.defaultProps = {
  showStatus: false,
  level: 0,
};

export default withRouter(SingleLink);
