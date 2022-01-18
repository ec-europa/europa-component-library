import React from 'react';
import PropTypes from 'prop-types';

import OrderedList from './OrderedList';
import OrderedListItem from './OrderedListItem';

function OrderedListWithData({ items, className, ...props }) {
  return (
    <OrderedList {...props} className={className}>
      {items.map((item) => (
        <OrderedListItem key={item.label}>
          {item.label}
          {item.nested && <OrderedListWithData items={item.nested} />}
        </OrderedListItem>
      ))}
    </OrderedList>
  );
}

OrderedListWithData.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(OrderedListItem.propTypes)),
  className: PropTypes.string,
};

OrderedListWithData.defaultProps = {
  items: [],
  className: '',
};

export default OrderedListWithData;
