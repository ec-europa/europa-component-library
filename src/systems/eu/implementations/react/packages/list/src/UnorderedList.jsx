import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import UnorderedListItem from './UnorderedListItem';

const UnorderedList = ({ variant, items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-unordered-list', {
    [`ecl-unordered-list--${variant}`]: variant,
  });

  return (
    <ul {...props} className={classNames}>
      {items.map(item => {
        if (item.nested) {
          return (
            <Fragment key={item.label}>
              <UnorderedListItem>
                {item.label}
                <UnorderedList items={item.nested} />
              </UnorderedListItem>
            </Fragment>
          );
        }

        return (
          <UnorderedListItem key={item.label}>{item.label}</UnorderedListItem>
        );
      })}
    </ul>
  );
};

UnorderedList.propTypes = {
  variant: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(UnorderedListItem.propTypes)),
  className: PropTypes.string,
};

UnorderedList.defaultProps = {
  variant: '',
  items: [],
  className: '',
};

export default UnorderedList;
