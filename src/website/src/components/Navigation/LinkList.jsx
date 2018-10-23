import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SingleLink from './SingleLink';
import LinkGroup from './LinkGroup';
import LinkSection from './LinkSection';
import styles from './LinkList.scss';

class LinkList extends PureComponent {
  render() {
    const {
      pages,
      level,
      showStatus,
      'aria-hidden': ariaHidden,
      parentSection,
    } = this.props;

    return (
      <ul className={styles.list} data-level={level} aria-hidden={ariaHidden}>
        {pages.filter(p => p.hidden !== true).map(p => (
          <li key={p.title}>
            {p.type === 'page' && (
              <SingleLink page={p} showStatus={showStatus} level={level} />
            )}
            {p.type === 'group' && (
              <LinkGroup
                pages={p.children}
                group={p.title}
                showStatus={showStatus}
                groupUrl={`${parentSection}/${p.title}`}
                level={level}
              />
            )}
            {p.type === 'section' && (
              <LinkSection
                pages={p.children}
                section={p.title}
                showStatus={showStatus}
                groupUrl={`${parentSection}/${p.title}`}
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
  pages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  'aria-hidden': PropTypes.bool,
  parentSection: PropTypes.string,
};

LinkList.defaultProps = {
  showStatus: false,
  level: 0,
  'aria-hidden': false,
  parentSection: '',
};

export default withRouter(LinkList);
