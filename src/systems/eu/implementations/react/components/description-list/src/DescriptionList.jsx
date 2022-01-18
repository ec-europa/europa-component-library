import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function DescriptionList({ variant, className, ...props }) {
  const classNames = classnames(className, 'ecl-description-list', {
    [`ecl-description-list--${variant}`]: variant,
  });

  return <dl {...props} className={classNames} />;
}

DescriptionList.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

DescriptionList.defaultProps = {
  variant: '',
  className: '',
};

export default DescriptionList;
