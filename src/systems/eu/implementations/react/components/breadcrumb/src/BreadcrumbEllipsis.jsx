import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@ecl/eu-react-component-icon';

export function BreadcrumbEllipsis({ label, isVisible }) {
  return (
    <li
      className="ecl-breadcrumb__segment ecl-breadcrumb__segment--ellipsis"
      aria-hidden={!isVisible}
      data-ecl-breadcrumb-ellipsis
    >
      <button
        type="button"
        className="ecl-breadcrumb__ellipsis"
        aria-label={label}
        data-ecl-breadcrumb-ellipsis-button
      >
        …
      </button>
      <Icon
        className="ecl-breadcrumb__icon"
        shape="ui--corner-arrow"
        transform="rotate-90"
        size="xs"
        role="presentation"
        aria-hidden
      />
    </li>
  );
}

BreadcrumbEllipsis.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
};

BreadcrumbEllipsis.defaultProps = {
  label: '',
  isVisible: true,
};

export default BreadcrumbEllipsis;
