/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Predefined sprites
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

const Icon = ({ size, color, icon, iconPath, className, ...props }) => {
  const classNames = classnames(className, {
    'ecl-icon': true,
    [`ecl-icon--${size}`]: size,
    [`ecl-icon--${color}`]: color,
  });

  return (
    <svg {...props} className={classNames}>
      <use xlinkHref={`${iconPath}#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconPath: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  color: '',
  size: 'm',
  icon: '',
  iconPath: defaultSprite,
  className: '',
};

export default Icon;
