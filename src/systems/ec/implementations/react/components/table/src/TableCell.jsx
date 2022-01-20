import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TableCell({ group, className, ...props }) {
  const classNames = classnames(className, 'ecl-table__cell', {
    [`ecl-table__cell--group`]: group,
  });

  return <td {...props} className={classNames} />;
}

TableCell.propTypes = {
  group: PropTypes.bool,
  className: PropTypes.string,
};

TableCell.defaultProps = {
  group: false,
  className: '',
};

export default TableCell;
