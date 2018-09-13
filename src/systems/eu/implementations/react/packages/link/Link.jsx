/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon/Icon';

const Link = ({
  variant,
  href,
  label,
  icon,
  iconPosition,
  className,
  ...props
}) => {
  const classNames = classnames(className, {
    'ecl-link': true,
    [`ecl-link--${variant}`]: variant,
    [`ecl-link--icon-${iconPosition}`]: icon && icon.icon,
  });

  let link = '';
  if (icon && icon.icon) {
    if (iconPosition === 'before') {
      link = (
        <a {...props} href={href} className={classNames}>
          <Icon {...icon} className="ecl-link__icon" />
          <span className="ecl-link__label">{label}</span>
        </a>
      );
    } else {
      link = (
        <a {...props} href={href} className={classNames}>
          <span className="ecl-link__label">{label}</span>
          <Icon {...icon} className="ecl-link__icon" />
        </a>
      );
    }
  } else {
    link = (
      <a {...props} href={href} className={classNames}>
        {label}
      </a>
    );
  }

  return link;
};

Link.propTypes = {
  variant: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.shape(Icon.propTypes),
  iconPosition: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  variant: '',
  href: '',
  label: '',
  icon: {},
  iconPosition: 'after',
  className: '',
};

export default Link;
