import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import OrderedList from './OrderedList';
import OrderedListItem from './OrderedListItem';

const OrderedListWithData = ({ items, className, ...props }) => {
  return (
    <OrderedList {...props} className={className}>
      {items.map(item => {
        if (item.nested) {
          return (
            <Fragment key={item.label}>
              <OrderedListItem>
                {item.label}
                <OrderedListWithData items={item.nested} />
              </OrderedListItem>
            </Fragment>
          );
        }

        return <OrderedListItem key={item.label}>{item.label}</OrderedListItem>;
      })}
    </OrderedList>
  );
};

OrderedListWithData.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(OrderedListItem.propTypes)),
  className: PropTypes.string,
};

OrderedListWithData.defaultProps = {
  items: [],
  className: '',
};

export default OrderedListWithData;
