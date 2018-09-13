/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Link = ({
  variant,
  href,
  label,
  // icon,
  // iconPosition,
  className,
  ...props
}) => {
  const classNames = classnames(className, {
    'ecl-link': true,
    [`ecl-link--${variant}`]: variant,
  });

  return (
    <a {...props} href={href} className={classNames}>
      <span className="ecl-link__container">
        <span className="ecl-link__label">{label}</span>
      </span>
    </a>
  );
};

Link.propTypes = {
  variant: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  variant: 'primary',
  href: 'submit',
  label: '',
  className: '',
};

export default Link;
