import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SingleLink from './SingleLink';
import LinkGroup from './LinkGroup';

class LinkList extends PureComponent {
  render() {
    const {
      pages,
      level,
      showStatus,
      className,
      'aria-hidden': ariaHidden,
      parentSection,
    } = this.props;

    return (
      <ul className={className} data-level={level} aria-hidden={ariaHidden}>
        {Object.keys(pages).map(key => (
          <li key={key}>
            {pages[key].url ? (
              <SingleLink page={pages[key]} showStatus={showStatus} />
            ) : (
              <LinkGroup
                pages={pages[key]}
                section={key}
                showStatus={showStatus}
                groupUrl={`${parentSection}/${key}`}
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

LinkList.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  pages: PropTypes.shape().isRequired,
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  className: PropTypes.string,
  'aria-hidden': PropTypes.bool,
  parentSection: PropTypes.string,
};

LinkList.defaultProps = {
  showStatus: false,
  level: 0,
  className: '',
  'aria-hidden': false,
  parentSection: '',
};

export default withRouter(LinkList);
