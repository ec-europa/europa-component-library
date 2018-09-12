/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Predefined sprites
import brandedSprite from '@ecl/ec-resources-icons/dist/sprites/icons-branded.svg';
import generalSprite from '@ecl/ec-resources-icons/dist/sprites/icons-general.svg';
import notificationsSprite from '@ecl/ec-resources-icons/dist/sprites/icons-notifications.svg';
import socialSprite from '@ecl/ec-resources-icons/dist/sprites/icons-social.svg';
import uiSprite from '@ecl/ec-resources-icons/dist/sprites/icons-ui.svg';

const getPath = iconSet => {
  if (iconSet === 'branded') return brandedSprite;
  if (iconSet === 'general') return generalSprite;
  if (iconSet === 'notifications') return notificationsSprite;
  if (iconSet === 'social') return socialSprite;
  if (iconSet === 'ui') return uiSprite;

  return '';
};
const Icon = ({
  variant,
  size,
  color,
  icon,
  iconPath,
  iconSet,
  className,
  ...props
}) => {
  const classNames = classnames(className, {
    'ecl-icon': true,
    [`ecl-icon--${variant}`]: variant,
    [`ecl-icon--${size}`]: size,
    [`ecl-icon--${color}`]: color,
  });

  const iconHref = iconPath || getPath(iconSet);

  return (
    <svg {...props} className={classNames}>
      <use xlinkHref={`${iconHref}#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconPath: PropTypes.string,
  iconSet: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  variant: '',
  color: '',
  size: 'm',
  icon: '',
  iconPath: '',
  iconSet: '',
  className: '',
};

export default Icon;
