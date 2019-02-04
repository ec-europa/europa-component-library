import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Accordion = ({ children, className, ...props }) => {
  return (
    <dl
      {...props}
      className={classnames(className, 'ecl-accordion')}
      data-ecl-accordion
      role="presentation"
    >
      {children}
    </dl>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  children: null,
  className: '',
};

export default Accordion;
