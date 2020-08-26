import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DateBlock = ({
  variant, // ongoing, canceled, past
  dateTime,
  day,
  month,
  monthFull,
  year,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-date-block', {
    [`ecl-date-block--${variant}`]: variant,
  });

  let monthMarkup = '';
  if (monthFull !== '' && monthFull !== month) {
    monthMarkup = (
      <abbr
        aria-hidden="true"
        title={monthFull}
        className="ecl-date-block__month"
      >
        {month}
      </abbr>
    );
  } else {
    monthMarkup = <span className="ecl-date-block__month">{month}</span>;
  }

  return (
    <time {...props} className={classNames} dateTime={dateTime}>
      <span className="ecl-u-sr-only">{dateTime}</span>
      <span aria-hidden="true" className="ecl-date-block__day">
        {day}
      </span>
      {monthMarkup}
      <span aria-hidden="true" className="ecl-date-block__year">
        {year}
      </span>
    </time>
  );
};

DateBlock.propTypes = {
  variant: PropTypes.string,
  dateTime: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  monthFull: PropTypes.string,
  year: PropTypes.string,
  className: PropTypes.string,
};

DateBlock.defaultProps = {
  variant: '',
  dateTime: '',
  day: '',
  month: '',
  monthFull: '',
  year: '',
  className: '',
};

export default DateBlock;
