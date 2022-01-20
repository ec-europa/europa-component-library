import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@ecl/eu-react-component-icon';

export function BreadcrumbCoreEllipsis({ label, isVisible }) {
  return (
    <li
      className="ecl-breadcrumb-core__segment ecl-breadcrumb-core__segment--ellipsis"
      aria-hidden={!isVisible}
      data-ecl-breadcrumb-core-ellipsis
    >
      <button
        type="button"
        className="ecl-breadcrumb-core__ellipsis"
        aria-label={label}
        data-ecl-breadcrumb-core-ellipsis-button
      >
        …
      </button>
      <Icon
        className="ecl-breadcrumb-core__icon"
        shape="ui--corner-arrow"
        transform="rotate-90"
        size="2xs"
        role="presentation"
        aria-hidden
      />
    </li>
  );
}

BreadcrumbCoreEllipsis.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
};

BreadcrumbCoreEllipsis.defaultProps = {
  label: '',
  isVisible: true,
};

export default BreadcrumbCoreEllipsis;
