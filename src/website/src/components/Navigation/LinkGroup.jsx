import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import slugify from 'slugify';

import icons from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import styles from './LinkGroup.scss';
import LinkList from './LinkList';

const slug = s => slugify(s, { lower: true, remove: /'/gi });

class LinkGroup extends PureComponent {
  constructor(props) {
    super(props);

    const hasPathname = props && props.location && props.location.pathname;
    const { groupUrl } = props;

    this.state = {
      isOpen:
        hasPathname &&
        groupUrl &&
        props.location.pathname.indexOf(slug(groupUrl)) === 0,
    };

    this.toggleGroup = this.toggleGroup.bind(this);
  }

  toggleGroup() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { pages, level, showStatus, section, groupUrl } = this.props;
    const { isOpen } = this.state;

    return (
      <Fragment>
        <button
          type="button"
          className={`${styles['group-list-item']} ${styles[`level-${level}`]}`}
          onClick={this.toggleGroup}
        >
          <span>
            {section}
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
        <LinkList
          pages={pages}
          level={level + 1}
          aria-hidden={!isOpen}
          className={styles.list}
          showStatus={showStatus}
          parentSection={groupUrl}
        />
      </Fragment>
    );
  }
}

LinkGroup.propTypes = {
  groupUrl: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  pages: PropTypes.shape().isRequired,
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  section: PropTypes.string,
};

LinkGroup.defaultProps = {
  groupUrl: '',
  showStatus: false,
  level: 0,
  section: '',
};

export default withRouter(LinkGroup);
