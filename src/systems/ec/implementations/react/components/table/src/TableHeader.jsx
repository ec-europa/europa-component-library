import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TableHeader({ className, ...props }) {
  return (
    <th {...props} className={classnames(className, 'ecl-table__header')} />
  );
}

TableHeader.propTypes = {
  className: PropTypes.string,
};

TableHeader.defaultProps = {
  className: '',
};

export default TableHeader;
