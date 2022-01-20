import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@ecl/ec-react-component-icon';

export function BreadcrumbStandardisedEllipsis({ label, isVisible }) {
  return (
    <li
      className="ecl-breadcrumb-standardised__segment ecl-breadcrumb-standardised__segment--ellipsis"
      aria-hidden={!isVisible}
      data-ecl-breadcrumb-standardised-ellipsis
    >
      <button
        type="button"
        className="ecl-breadcrumb-standardised__ellipsis"
        aria-label={label}
        data-ecl-breadcrumb-standardised-ellipsis-button
      >
        …
      </button>
      <Icon
        className="ecl-breadcrumb-standardised__icon"
        shape="ui--corner-arrow"
        transform="rotate-90"
        size="2xs"
        role="presentation"
        aria-hidden
      />
    </li>
  );
}

BreadcrumbStandardisedEllipsis.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
};

BreadcrumbStandardisedEllipsis.defaultProps = {
  label: '',
  isVisible: true,
};

export default BreadcrumbStandardisedEllipsis;
