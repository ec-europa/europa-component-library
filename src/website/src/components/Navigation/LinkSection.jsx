import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

import icons from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import styles from './LinkSection.scss';
import LinkList from './LinkList'; // eslint-disable-line import/no-cycle

class LinkSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: props.location.pathname,
      isOpen: props.location.pathname.indexOf(props.attributes.url) === 0,
    };

    this.toggleSection = this.toggleSection.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.pathname !== nextProps.location.pathname &&
      nextProps.location.pathname.indexOf(nextProps.attributes.url) === 0
    ) {
      return { pathname: nextProps.location.pathname, isOpen: true };
    }

    return {
      pathname: nextProps.location.pathname,
    };
  }

  toggleSection() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { pages, level, showStatus, section, attributes } = this.props;

    const { isOpen } = this.state;

    const to = attributes.defaultTab
      ? `${attributes.url}${attributes.defaultTab}/`
      : attributes.url;

    return (
      <>
        <span className={styles['group-list-parent']}>
          <Link
            to={to}
            className={`${styles['group-list-item']} ${
              styles[`level-${level}`]
            }`}
          >
            {section}
          </Link>
          <button
            className={styles.button}
            type="button"
            onClick={this.toggleSection}
            aria-label={`Click to expand the section ${section}`}
          >
            <svg
              focusable="false"
              aria-hidden="true"
              className={classnames(styles.icon, {
                [styles['icon-rotate-90']]: !isOpen,
                [styles['icon-rotate-180']]: isOpen,
              })}
            >
              <use xlinkHref={`${icons}#corner-arrow`} />
            </svg>
          </button>
        </span>
        <LinkList
          pages={pages}
          level={level + 1}
          aria-hidden={!isOpen}
          showStatus={showStatus}
        />
      </>
    );
  }
}

LinkSection.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  attributes: PropTypes.shape({
    url: PropTypes.string,
    defaultTab: PropTypes.string,
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
