import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DescriptionTerm = ({ className, ...props }) => (
  <dt
    {...props}
    className={classnames(className, 'ecl-description-list__term')}
  />
);

DescriptionTerm.propTypes = {
  className: PropTypes.string,
};

DescriptionTerm.defaultProps = {
  className: '',
};

export default DescriptionTerm;
