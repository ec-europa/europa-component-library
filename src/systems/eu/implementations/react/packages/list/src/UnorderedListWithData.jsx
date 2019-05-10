import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import UnorderedList from './UnorderedList';
import UnorderedListItem from './UnorderedListItem';

const UnorderedListWithData = ({ variant, items, className, ...props }) => {
  return (
    <UnorderedList {...props} className={className}>
      {items.map(item => {
        if (item.nested) {
          return (
            <Fragment key={item.label}>
              <UnorderedListItem>
                {item.label}
                <UnorderedListWithData items={item.nested} />
              </UnorderedListItem>
            </Fragment>
          );
        }

        return (
          <UnorderedListItem key={item.label}>{item.label}</UnorderedListItem>
        );
      })}
    </UnorderedList>
  );
};

UnorderedListWithData.propTypes = {
  variant: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(UnorderedListItem.propTypes)),
  className: PropTypes.string,
};

UnorderedListWithData.defaultProps = {
  variant: '',
  items: [],
  className: '',
};

export default UnorderedListWithData;
