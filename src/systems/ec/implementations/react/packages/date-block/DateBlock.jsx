/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const DateBlock = ({
  variant,
  href,
  label,
  className,
  extraAttributes,
  ...props
}) => {
  let classes = 'ecl-date-block';
  if (variant) classes += ` ecl-date-block--${variant}`;
  if (className) classes += ` ${className}`;

  return (
    <div className={classes} {...props}>
      <div className="ecl-date-block__body">
        <span className="ecl-date-block__week-day">Tue</span>
        <span className="ecl-date-block__day">12</span>
        <span className="ecl-date-block__month">Jan</span>
      </div>
    </div>
  );
};

DateBlock.propTypes = {
  variant: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

DateBlock.defaultProps = {
  variant: 'primary',
  href: 'submit',
  label: '',
  className: '',
};

export default DateBlock;
