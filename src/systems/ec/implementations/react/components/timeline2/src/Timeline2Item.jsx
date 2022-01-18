import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export function Timeline2Item({ label, title, children, className, ...props }) {
  return (
    <li {...props} className={classnames(className, 'ecl-timeline2__item')}>
      <div className="ecl-timeline2__label">{label}</div>
      {title && <div className="ecl-timeline2__title">{title}</div>}
      <div className="ecl-timeline2__content">{children}</div>
    </li>
  );
}

Timeline2Item.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Timeline2Item.defaultProps = {
  label: '',
  title: '',
  children: null,
  className: '',
};

export default Timeline2Item;
