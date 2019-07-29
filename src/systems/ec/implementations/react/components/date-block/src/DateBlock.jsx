import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DateBlock = ({
  variant, // ongoing, canceled, past, rescheduled
  day,
  month,
  year,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-date-block', {
    [`ecl-date-block--${variant}`]: variant,
  });

  return (
    <div {...props} className={classNames}>
      <div className="ecl-date-block__day">{day}</div>
      <div className="ecl-date-block__month">{month}</div>
      <div className="ecl-date-block__year">{year}</div>
    </div>
  );
};

DateBlock.propTypes = {
  variant: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
  className: PropTypes.string,
};

DateBlock.defaultProps = {
  variant: '',
  day: '',
  month: '',
  year: '',
  className: '',
};

export default DateBlock;
