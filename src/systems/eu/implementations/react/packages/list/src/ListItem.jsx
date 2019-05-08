import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ListItem = ({ children, className, ...props }) => (
  <li {...props} className={classnames(className, 'ecl-list__item')}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ListItem.defaultProps = {
  children: '',
  className: '',
};

export default ListItem;
