import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DescriptionDefinition = ({ className, ...props }) => (
  <dd
    {...props}
    className={classnames(className, 'ecl-description-list__definition')}
  />
);

DescriptionDefinition.propTypes = {
  className: PropTypes.string,
};

DescriptionDefinition.defaultProps = {
  className: '',
};

export default DescriptionDefinition;
