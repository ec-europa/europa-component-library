import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@ecl/eu-react-component-icon';

export function BreadcrumbHarmonisedEllipsis({ label, isVisible }) {
  return (
    <li
      className="ecl-breadcrumb-harmonised__segment ecl-breadcrumb-harmonised__segment--ellipsis"
      aria-hidden={!isVisible}
      data-ecl-breadcrumb-harmonised-ellipsis
    >
      <button
        type="button"
        className="ecl-breadcrumb-harmonised__ellipsis"
        aria-label={label}
        data-ecl-breadcrumb-harmonised-ellipsis-button
      >
        …
      </button>
      <Icon
        className="ecl-breadcrumb-harmonised__icon"
        shape="ui--corner-arrow"
        transform="rotate-90"
        size="2xs"
        role="presentation"
        aria-hidden
      />
    </li>
  );
}

BreadcrumbHarmonisedEllipsis.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
};

BreadcrumbHarmonisedEllipsis.defaultProps = {
  label: '',
  isVisible: true,
};

export default BreadcrumbHarmonisedEllipsis;
