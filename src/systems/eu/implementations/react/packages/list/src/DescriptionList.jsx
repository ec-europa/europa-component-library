import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DescriptionList = ({ className, ...props }) => {
  const classNames = classnames(className, 'ecl-description-list');

  return <dl {...props} className={classNames} />;
};

DescriptionList.propTypes = {
  className: PropTypes.string,
};

DescriptionList.defaultProps = {
  className: '',
};

export default DescriptionList;
