import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const OrderedListItem = ({ children, className, ...props }) => (
  <li {...props} className={classnames(className, 'ecl-ordered-list__item')}>
    {children}
  </li>
);

OrderedListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

OrderedListItem.defaultProps = {
  children: '',
  className: '',
};

export default OrderedListItem;
