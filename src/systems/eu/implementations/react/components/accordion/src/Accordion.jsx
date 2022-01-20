import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export function Accordion({ children, className, ...props }) {
  return (
    <div
      {...props}
      className={classnames(className, 'ecl-accordion')}
      data-ecl-accordion
    >
      {children}
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  children: null,
  className: '',
};

export default Accordion;
