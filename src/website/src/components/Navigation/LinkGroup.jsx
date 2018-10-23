import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './LinkGroup.scss';
import LinkList from './LinkList';

class LinkGroup extends PureComponent {
  render() {
    const { pages, level, showStatus, group, groupUrl } = this.props;

    return (
      <Fragment>
        <span className={styles.group}>{group}</span>
        <LinkList
          pages={pages}
          level={level + 1}
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
  pages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  group: PropTypes.string,
};

LinkGroup.defaultProps = {
  groupUrl: '',
  showStatus: false,
  level: 0,
  group: '',
};

export default withRouter(LinkGroup);
