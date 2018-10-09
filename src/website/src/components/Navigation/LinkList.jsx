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

    let keys = [];

    // Manually sort keys for level 0
    if (level === 0) {
      keys = [
        'Getting started',
        "What's new",
        'Style',
        'Components',
        'Templates',
        'Guidelines',
        'Resources',
      ];
    } else {
      keys = Object.keys(pages).sort((a, b) => {
        if (pages[a].order !== undefined && pages[b].order !== undefined) {
          return pages[a].order > pages[b].order;
        }

        if (typeof a === 'string' && typeof b === 'string') {
          return a.localeCompare(b);
        }

        return 0;
      });
    }

    return (
      <ul className={className} data-level={level} aria-hidden={ariaHidden}>
        {keys.map(key => (
          <li key={key}>
            {pages[key].url ? (
              <SingleLink
                page={pages[key]}
                showStatus={showStatus}
                level={level}
              />
            ) : (
              <LinkGroup
                pages={pages[key]}
                section={key}
                showStatus={showStatus}
                groupUrl={`${parentSection}/${key}`}
                level={level}
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
