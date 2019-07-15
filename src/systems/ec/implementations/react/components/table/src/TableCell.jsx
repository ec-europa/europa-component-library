import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableCell = ({ group, label, className, ...props }) => {
  const classNames = classnames(className, 'ecl-table__cell', {
    [`ecl-table__cell--group`]: group,
  });

  return <td {...props} className={classNames} />;
};

TableCell.propTypes = {
  group: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
};

TableCell.defaultProps = {
  group: false,
  label: '',
  className: '',
};

export default TableCell;
