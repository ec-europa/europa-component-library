import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TableHead = ({ className, ...props }) => (
  <thead {...props} className={classnames(className, 'ecl-table__head')} />
);

TableHead.propTypes = {
  className: PropTypes.string,
};

TableHead.defaultProps = {
  className: '',
};

export default TableHead;
