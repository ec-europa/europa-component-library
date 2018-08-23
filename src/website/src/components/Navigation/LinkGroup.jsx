import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import icons from '@ecl/ec-preset-website/dist/images/icons/symbol-defs.svg';
import NavigationLink from './NavigationLink';

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
          className="tmp-nav__group-list-item"
          onClick={this.toggleGroup}
        >
          <span>
            {title}
            <svg className="tmp-nav__icon">
              {isOpen ? (
                <use xlinkHref={`${icons}#ecl-icon--down`} />
              ) : (
                <use xlinkHref={`${icons}#ecl-icon--right`} />
              )}
            </svg>
          </span>
        </button>
        <ul className="tmp-nav__list" aria-hidden={!isOpen}>
          {pages.map(page => (
            <li key={page.url}>
              <NavigationLink
                meta={page}
                className="tmp-nav__page-list-item"
                activeClassName="tmp-nav__page-list-item--active"
              >
                {showStatus && (
                  <Fragment>
                    {page.ready ? (
                      <span
                        className="tmp-nav__page-status"
                        style={{
                          backgroundColor: '#467a39',
                        }}
                        title="Ready"
                      />
                    ) : (
                      <span
                        className="tmp-nav__page-status"
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
