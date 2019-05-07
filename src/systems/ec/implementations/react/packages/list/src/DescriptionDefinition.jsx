import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DescriptionDefinition = ({ children, className, ...props }) => (
  <dd
    {...props}
    className={classnames(className, 'ecl-description-list__definition')}
  >
    {children}
  </dd>
);

DescriptionDefinition.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DescriptionDefinition.defaultProps = {
  children: '',
  className: '',
};

export default DescriptionDefinition;
