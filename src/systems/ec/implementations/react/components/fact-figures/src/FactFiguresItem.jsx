import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const FactFiguresItem = ({
  label,
  title,
  children,
  className,
  ...props
}) => (
  <div {...props} className={classnames(className, 'ecl-fact-figures__item')}>
    figures
  </div>
);

FactFiguresItem.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

FactFiguresItem.defaultProps = {
  label: '',
  title: '',
  children: null,
  className: '',
};

export default FactFiguresItem;
