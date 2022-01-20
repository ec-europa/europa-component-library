import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TableRow({ className, ...props }) {
  return <tr {...props} className={classnames(className, 'ecl-table__row')} />;
}

TableRow.propTypes = {
  className: PropTypes.string,
};

TableRow.defaultProps = {
  className: '',
};

export default TableRow;
