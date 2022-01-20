import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function UnorderedListItem({ className, ...props }) {
  return (
    <li
      {...props}
      className={classnames(className, 'ecl-unordered-list__item')}
    />
  );
}

UnorderedListItem.propTypes = {
  className: PropTypes.string,
};

UnorderedListItem.defaultProps = {
  className: '',
};

export default UnorderedListItem;
