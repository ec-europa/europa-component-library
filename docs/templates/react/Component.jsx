import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Component_name = ({ variant, type, label, icon, className, ...props }) => {
  const classNames = classnames(className, 'ecl-component_name', {
    [`ecl-component_name--${variant}`]: variant,
  });

  return (
   // jsx code.
  );
};

Component_name.propTypes = {};

Component_name.defaultProps = {};

export default Component_name;