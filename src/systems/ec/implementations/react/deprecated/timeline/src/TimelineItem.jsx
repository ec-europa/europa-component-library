import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const TimelineItem = ({ label, children, className, ...props }) => (
  <li {...props} className={classnames(className, 'ecl-timeline__item')}>
    <>
      <div className="ecl-timeline__label">{label}</div>
      <div className="ecl-timeline__content">{children}</div>
    </>
  </li>
);

TimelineItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

TimelineItem.defaultProps = {
  label: '',
  children: null,
  className: '',
};

export default TimelineItem;
