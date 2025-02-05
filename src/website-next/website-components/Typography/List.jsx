import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './List.scss';

function List({ size, children }) {
  return (
    <ul
      className={classnames(styles.list, {
        [styles[`list--${size}`]]: size,
      })}
    >
      {children}
    </ul>
  );
}

List.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

List.defaultProps = {
  size: '',
  children: null,
};

export default List;
