import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DescriptionList = ({ children, className, ...props }) => {
  const classNames = classnames(className, 'ecl-description-list');

  return (
    <dl {...props} className={classNames}>
      {children}
    </dl>
  );
};

DescriptionList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DescriptionList.defaultProps = {
  children: '',
  className: '',
};

export default DescriptionList;
