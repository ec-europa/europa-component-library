import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Accordion2 = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={classnames(className, 'ecl-accordion2')}
      data-ecl-accordion
    >
      {children}
    </div>
  );
};

Accordion2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Accordion2.defaultProps = {
  children: null,
  className: '',
};

export default Accordion2;
