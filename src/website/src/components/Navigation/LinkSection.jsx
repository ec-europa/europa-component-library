import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

import icons from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import styles from './LinkSection.scss';
import LinkList from './LinkList';

class LinkSection extends PureComponent {
  render() {
    const {
      pages,
      level,
      showStatus,
      section,
      attributes, // eslint-disable-line react/prop-types
      location,
    } = this.props;
    const isOpen = location.pathname.indexOf(attributes.url) === 0;

    return (
      <Fragment>
        <Link
          to={attributes.url}
          className={`${styles['group-list-item']} ${styles[`level-${level}`]}`}
        >
          <span>
            {section}
            <svg
              focusable="false"
              aria-hidden="true"
              className={classnames(styles.icon, {
                [styles['icon-rotate-90']]: !isOpen,
                [styles['icon-rotate-180']]: isOpen,
              })}
            >
              <use xlinkHref={`${icons}#ui--rounded-arrow`} />
            </svg>
          </span>
        </Link>
        <LinkList
          pages={pages}
          level={level + 1}
          aria-hidden={!isOpen}
          showStatus={showStatus}
        />
      </Fragment>
    );
  }
}

LinkSection.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  pages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  section: PropTypes.string,
};

LinkSection.defaultProps = {
  showStatus: false,
  level: 0,
  section: '',
};

export default withRouter(LinkSection);
