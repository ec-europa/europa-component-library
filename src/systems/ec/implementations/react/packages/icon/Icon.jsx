/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Predefined sprites
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

const Icon = ({ className, color, iconPath, shape, size, ...props }) => {
  const classNames = classnames(className, 'ecl-icon', {
    [`ecl-icon--${size}`]: size,
    [`ecl-icon--${color}`]: color,
  });

  return (
    <svg {...props} className={classNames}>
      <use xlinkHref={`${iconPath}#${shape}`} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  iconPath: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  color: '',
  iconPath: defaultSprite,
  shape: '',
  size: 'm',
};

export default Icon;
