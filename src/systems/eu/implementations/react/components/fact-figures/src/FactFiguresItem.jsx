import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon';

export function FactFiguresItem({
  icon,
  value,
  title,
  description,
  className,
  ...props
}) {
  return (
    <div {...props} className={classnames(className, 'ecl-fact-figures__item')}>
      {!!(icon && Object.keys(icon).length >= 1) && (
        <Icon className="ecl-fact-figures__icon" {...icon} />
      )}
      {value && <div className="ecl-fact-figures__value">{value}</div>}
      {title && <div className="ecl-fact-figures__title">{title}</div>}
      {description && (
        <div className="ecl-fact-figures__description">{description}</div>
      )}
    </div>
  );
}

FactFiguresItem.propTypes = {
  icon: PropTypes.shape(Icon.propTypes),
  value: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

FactFiguresItem.defaultProps = {
  icon: {},
  title: '',
  value: '',
  description: '',
  className: '',
};

export default FactFiguresItem;
