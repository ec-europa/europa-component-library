import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DateBlock = ({
  variant, // ongoing, cancelled, past
  weekDay,
  day,
  month,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-date-block', {
    [`ecl-date-block--${variant}`]: variant,
  });

  return (
    <div {...props} className={classNames}>
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
