import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableBody = ({ className, ...props }) => (
  <tbody {...props} className={classnames(className, 'ecl-table__body')} />
);

TableBody.propTypes = {
  className: PropTypes.string,
};

TableBody.defaultProps = {
  className: '',
};

export default TableBody;
