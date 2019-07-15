import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableHeader = ({ label, className, ...props }) => (
  <th {...props} className={classnames(className, 'ecl-table__header')} />
);

TableHeader.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

TableHeader.defaultProps = {
  label: '',
  className: '',
};

export default TableHeader;
