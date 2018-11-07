import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './LinkGroup.scss';
import LinkList from './LinkList';

const LinkGroup = React.memo(({ pages, level, showStatus, group }) => (
  <Fragment>
    <span className={styles.group}>{group}</span>
    <LinkList pages={pages} level={level + 1} showStatus={showStatus} />
  </Fragment>
));

LinkGroup.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  pages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  group: PropTypes.string,
};

LinkGroup.defaultProps = {
  showStatus: false,
  level: 0,
  group: '',
};

export default withRouter(LinkGroup);
