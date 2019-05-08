import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DescriptionTerm = ({ children, className, ...props }) => (
  <dt
    {...props}
    className={classnames(className, 'ecl-description-list__term')}
  >
    {children}
  </dt>
);

DescriptionTerm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DescriptionTerm.defaultProps = {
  children: '',
  className: '',
};

export default DescriptionTerm;
