import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import OrderedListItem from './OrderedListItem';

const OrderedList = ({ items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-ordered-list');

  return (
    <ol {...props} className={classNames}>
      {items.map(item => {
        if (item.nested) {
          return (
            <Fragment key={item.label}>
              <OrderedListItem>
                {item.label}
                <OrderedList items={item.nested} />
              </OrderedListItem>
            </Fragment>
          );
        }

        return <OrderedListItem key={item.label}>{item.label}</OrderedListItem>;
      })}
    </ol>
  );
};

OrderedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(OrderedListItem.propTypes)),
  className: PropTypes.string,
};

OrderedList.defaultProps = {
  items: [],
  className: '',
};

export default OrderedList;
