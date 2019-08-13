import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableRow = ({ className, ...props }) => (
  <tr {...props} className={classnames(className, 'ecl-table__row')} />
);

TableRow.propTypes = {
  className: PropTypes.string,
};

TableRow.defaultProps = {
  className: '',
};

export default TableRow;
