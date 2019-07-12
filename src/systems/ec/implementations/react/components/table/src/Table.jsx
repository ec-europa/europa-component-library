import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Table = ({ className, ...props }) => {
  const classNames = classnames(className, 'ecl-table');

  return <table {...props} className={classNames} />;
};

Table.propTypes = {
  className: PropTypes.string,
};

Table.defaultProps = {
  className: '',
};

export default Table;
