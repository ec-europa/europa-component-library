import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Table({ zebra, className, ...props }) {
  const classNames = classnames(className, 'ecl-table', {
    [`ecl-table--zebra`]: zebra,
  });

  return <table {...props} className={classNames} />;
}

Table.propTypes = {
  zebra: PropTypes.bool,
  className: PropTypes.string,
};

Table.defaultProps = {
  zebra: false,
  className: '',
};

export default Table;
