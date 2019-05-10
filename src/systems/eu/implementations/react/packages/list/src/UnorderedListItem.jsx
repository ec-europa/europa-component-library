import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const UnorderedListItem = ({ children, className, ...props }) => (
  <li {...props} className={classnames(className, 'ecl-unordered-list__item')}>
    {children}
  </li>
);

UnorderedListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

UnorderedListItem.defaultProps = {
  children: '',
  className: '',
};

export default UnorderedListItem;
