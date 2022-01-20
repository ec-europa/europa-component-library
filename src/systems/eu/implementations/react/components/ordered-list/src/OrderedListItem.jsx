import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function OrderedListItem({ className, ...props }) {
  return (
    <li
      {...props}
      className={classnames(className, 'ecl-ordered-list__item')}
    />
  );
}

OrderedListItem.propTypes = {
  className: PropTypes.string,
};

OrderedListItem.defaultProps = {
  className: '',
};

export default OrderedListItem;
