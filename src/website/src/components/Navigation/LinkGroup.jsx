import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import icons from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import NavigationLink from './NavigationLink';
import styles from './LinkGroup.scss';

class LinkGroup extends PureComponent {
  constructor(props) {
    super(props);

    const hasPathname = props && props.location && props.location.pathname;
    const { groupUrl } = props;

    this.state = {
      isOpen:
        hasPathname &&
        groupUrl &&
        props.location.pathname.indexOf(groupUrl) === 0,
    };

    this.toggleGroup = this.toggleGroup.bind(this);
  }

  toggleGroup() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { pages, title, showStatus } = this.props;
    const { isOpen } = this.state;

    return (
      <li>
        <button
          type="button"
          className={styles['group-list-item']}
          onClick={this.toggleGroup}
        >
          <span>
            {title}
            <svg
              className={classnames(styles.icon, {
                [styles['icon-rotate-90']]: !isOpen,
                [styles['icon-rotate-180']]: isOpen,
              })}
            >
              <use xlinkHref={`${icons}#ui--rounded-arrow`} />
            </svg>
          </span>
        </button>
        <ul className={styles.list} aria-hidden={!isOpen}>
          {pages.map(page => (
            <li key={page.url}>
              <NavigationLink
                meta={page}
                className={styles['page-list-item']}
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
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

LinkGroup.propTypes = {
  groupUrl: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  showStatus: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

LinkGroup.defaultProps = {
  showStatus: false,
};

export default withRouter(LinkGroup);
