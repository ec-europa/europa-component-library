import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableCell = ({ className, ...props }) => (
  <td {...props} className={classnames(className, 'ecl-table__cell')} />
);

TableCell.propTypes = {
  className: PropTypes.string,
};

TableCell.defaultProps = {
  className: '',
};

export default TableCell;
