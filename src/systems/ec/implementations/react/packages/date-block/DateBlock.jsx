/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const DateBlock = ({
  variant, // ongoing, cancelled, past
  weekDay,
  day,
  month,
  className,
  ...props
}) => {
  let classes = 'ecl-date-block';
  if (variant) classes += ` ecl-date-block--${variant}`;
  if (className) classes += ` ${className}`;

  return (
    <div {...props} className={classes}>
      <div className="ecl-date-block__week-day">{weekDay}</div>
      <div className="ecl-date-block__day">{day}</div>
      <div className="ecl-date-block__month">{month}</div>
    </div>
  );
};

DateBlock.propTypes = {
  variant: PropTypes.string,
  weekDay: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  className: PropTypes.string,
};

DateBlock.defaultProps = {
  variant: 'primary',
  weekDay: '',
  day: '',
  month: '',
  className: '',
};

export default DateBlock;
