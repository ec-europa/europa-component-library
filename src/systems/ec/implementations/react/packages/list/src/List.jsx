import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ListItem from './ListItem';

const List = ({ isOrdered, hasDivider, items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-list', {
    'ecl-list--divider': hasDivider,
  });
  const ListTag = isOrdered ? 'ol' : 'ul';

  return (
    <ListTag {...props} className={classNames}>
      {items.map(item => {
        if (item.nested) {
          return (
            <Fragment>
              <ListItem
                key={item.label}
                className={classnames(item.className, 'ecl-list__item')}
              >
                {item.label}
              </ListItem>
              <List isOrdered={isOrdered} items={item.nested} />
            </Fragment>
          );
        }

        return (
          <ListItem
            key={item.label}
            className={classnames(item.className, 'ecl-list__item')}
          >
            {item.label}
          </ListItem>
        );
      })}
    </ListTag>
  );
};

List.propTypes = {
  isOrdered: PropTypes.bool,
  hasDivider: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
  className: PropTypes.string,
};

List.defaultProps = {
  isOrdered: false,
  hasDivider: false,
  items: [],
  className: '',
};

export default List;
