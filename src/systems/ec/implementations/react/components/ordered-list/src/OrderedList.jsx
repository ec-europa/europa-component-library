import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function OrderedList({ className, ...props }) {
  const classNames = classnames(className, 'ecl-ordered-list');

  return <ol {...props} className={classNames} />;
}

OrderedList.propTypes = {
  className: PropTypes.string,
};

OrderedList.defaultProps = {
  className: '',
};

export default OrderedList;
