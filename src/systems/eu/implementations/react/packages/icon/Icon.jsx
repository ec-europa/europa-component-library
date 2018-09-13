/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultSprite from '@ecl/eu-resources-icons/dist/sprites/icons.svg';

const Icon = ({
  className,
  color,
  iconPath,
  shape,
  size,
  transform,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-icon', {
    [`ecl-icon--${size}`]: size,
    [`ecl-icon--${color}`]: color,
    [`ecl-icon--${transform}`]: transform,
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
  transform: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  color: '',
  iconPath: defaultSprite,
  shape: '',
  size: 'm',
  transform: '',
};

export default Icon;
