import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ListItem from './ListItem';

const List = ({ type, items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-list');

  return (
    <ul {...props} className={classNames}>
      List
    </ul>
  );
};

List.propTypes = {
  type: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
  className: PropTypes.string,
};

List.defaultProps = {
  type: 'unordered',
  items: [],
  className: '',
};

export default List;
