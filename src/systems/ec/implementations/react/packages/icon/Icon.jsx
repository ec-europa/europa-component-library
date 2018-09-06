/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import svgSprite from '@ecl/ec-resources/dist/icons.svg';

const Icon = ({
  variant,
  size,
  color,
  iconPath,
  icon,
  className,
  ...props
}) => {
  const classNames = classnames(className, {
    'ecl-icon': true,
    [`ecl-icon--${variant}`]: variant,
    [`ecl-icon--${size}`]: size,
    [`ecl-icon--${color}`]: color,
  });
  const path = iconPath || svgSprite;

  return (
    <svg className={classNames} {...props}>
      <use xlinkHref={`${path}#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  iconPath: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  variant: '',
  color: '',
  size: 'm',
  iconPath: '',
  icon: '',
  className: '',
};

export default Icon;
