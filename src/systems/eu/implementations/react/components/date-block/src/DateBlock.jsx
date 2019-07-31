import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DateBlock = ({
  variant, // ongoing, canceled, past, rescheduled
  dateTime,
  day,
  month,
  monthAbbr,
  year,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-date-block', {
    [`ecl-date-block--${variant}`]: variant,
  });

  return (
    <time {...props} className={classNames} dateTime={dateTime}>
      <span className="ecl-date-block__day">{day}</span>
      <abbr title={month} className="ecl-date-block__month">
        {monthAbbr}
      </abbr>
      <span className="ecl-date-block__year">{year}</span>
    </time>
  );
};

DateBlock.propTypes = {
  variant: PropTypes.string,
  dateTime: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  monthAbbr: PropTypes.string,
  year: PropTypes.string,
  className: PropTypes.string,
};

DateBlock.defaultProps = {
  variant: '',
  dateTime: '',
  day: '',
  month: '',
  monthAbbr: '',
  year: '',
  className: '',
};

export default DateBlock;
