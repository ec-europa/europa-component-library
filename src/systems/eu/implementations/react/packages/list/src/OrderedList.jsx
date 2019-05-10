import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const OrderedList = ({ children, className, ...props }) => {
  const classNames = classnames(className, 'ecl-ordered-list');

  return (
    <ol {...props} className={classNames}>
      {children}
    </ol>
  );
};

OrderedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

OrderedList.defaultProps = {
  children: '',
  className: '',
};

export default OrderedList;
