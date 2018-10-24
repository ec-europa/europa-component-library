/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';

const Link = ({
  variant,
  href,
  label,
  icon,
  iconPosition,
  className,
  ...props
}) => {
  let iconMarkup = '';
  if (Array.isArray(icon)) {
    iconMarkup = icon.map(i => (
      <Icon {...i} className={classnames(i.className, 'ecl-link__icon')} />
    ));
  } else if (icon && icon.shape) {
    iconMarkup = (
      <Icon
        {...icon}
        className={classnames(icon.className, 'ecl-link__icon')}
      />
    );
  }

  const classNames = classnames(className, 'ecl-link', {
    [`ecl-link--${variant}`]: variant,
    [`ecl-link--icon ecl-link--icon-${iconPosition}`]: iconMarkup,
  });

  if (iconMarkup) {
    if (iconPosition === 'before') {
      return (
        <a {...props} href={href} className={classNames}>
          {iconMarkup}
          &nbsp;
          <span className="ecl-link__label">{label}</span>
        </a>
      );
    }

    return (
      <a {...props} href={href} className={classNames}>
        <span className="ecl-link__label">{label}</span>
        &nbsp;
        {iconMarkup}
      </a>
    );
  }

  return (
    <a {...props} href={href} className={classNames}>
      {label}
    </a>
  );
};

Link.propTypes = {
  variant: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape(Icon.propTypes)),
    PropTypes.shape(Icon.propTypes),
  ]),
  iconPosition: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  variant: '',
  href: '',
  label: '',
  icon: [],
  iconPosition: 'after',
  className: '',
};

export default Link;
