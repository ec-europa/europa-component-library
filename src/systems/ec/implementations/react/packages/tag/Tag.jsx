/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Tag = ({ variant, size, color, iconPath, icon, className, ...props }) => {
  const classNames = classnames(className, {
    'ecl-tag': true,
    [`ecl-tag--${variant}`]: variant,
  });

  return (
    <div {...props} className={classNames}>
      <span className="ecl-tag__label">tags</span>
      <a className="ecl-tag__item" href="../../example.html#">
        apple
      </a>
      <a className="ecl-tag__item" href="../../example.html#">
        orange
      </a>
      <a className="ecl-tag__item" href="../../example.html#">
        lime
      </a>
      <a className="ecl-tag__item" href="../../example.html#">
        strawberry
      </a>
    </div>
  );
};

Tag.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  iconPath: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Tag.defaultProps = {
  variant: '',
  color: '',
  size: 'm',
  iconPath: '',
  icon: '',
  className: '',
};

export default Tag;
