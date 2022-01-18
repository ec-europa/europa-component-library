import React from 'react';
import PropTypes from 'prop-types';

import UnorderedList from './UnorderedList';
import UnorderedListItem from './UnorderedListItem';

function UnorderedListWithData({ variant, items, className, ...props }) {
  return (
    <UnorderedList {...props} className={className}>
      {items.map((item) => (
        <UnorderedListItem key={item.label}>
          {item.label}
          {item.nested && <UnorderedListWithData items={item.nested} />}
        </UnorderedListItem>
      ))}
    </UnorderedList>
  );
}

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
