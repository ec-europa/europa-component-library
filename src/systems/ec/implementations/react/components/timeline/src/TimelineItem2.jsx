import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TimelineItem = ({ label, children, className, ...props }) => (
  <li {...props} className={classnames(className, 'ecl-timeline2__item')}>
    <Fragment>
      <div className="ecl-timeline2__label">{label}</div>
      <div className="ecl-timeline2__content">{children}</div>
    </Fragment>
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
