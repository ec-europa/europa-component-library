import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router'; // Use the useLocation hook

import styles from './LinkGroup.module.scss';
import LinkList from './LinkList';

const LinkGroup = React.memo(({ pages, level, showStatus, group }) => {
  const location = useLocation(); // Get the location object from the hook

  return (
    <>
      <span className={styles.group}>{group}</span>
      <LinkList
        pages={pages}
        level={level + 1}
        showStatus={showStatus}
        location={location}
      />
    </>
  );
});

LinkGroup.propTypes = {
  pages: PropTypes.array.isRequired,
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  group: PropTypes.string,
};

LinkGroup.defaultProps = {
  showStatus: false,
  level: 0,
  group: '',
};

export default LinkGroup;
