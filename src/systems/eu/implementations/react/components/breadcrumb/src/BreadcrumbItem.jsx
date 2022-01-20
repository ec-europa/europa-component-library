import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/eu-react-component-icon';
import Link from '@ecl/eu-react-component-link';

export function BreadcrumbItem({
  href,
  label,
  isLastItem,
  isVisible,
  isExpandable,
  className,
  children,
  ...props
}) {
  return (
    <li
      {...props}
      className={classnames(className, 'ecl-breadcrumb__segment', {
        'ecl-breadcrumb__current-page': isLastItem,
      })}
      {...(isLastItem && { 'aria-current': 'page' })}
      data-ecl-breadcrumb-item={isExpandable ? 'expandable' : 'static'}
      aria-hidden={!isVisible}
    >
      {!isLastItem ? (
        <>
          <Link
            href={href}
            label={label}
            variant="standalone"
            {...(isLastItem && { 'aria-current': 'page' })}
            className="ecl-breadcrumb__link"
          />
          <Icon
            className="ecl-breadcrumb__icon"
            shape="ui--corner-arrow"
            transform="rotate-90"
            size="xs"
            role="presentation"
            aria-hidden
          />
        </>
      ) : (
        <>{label}</>
      )}
    </li>
  );
}

BreadcrumbItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  isLastItem: PropTypes.bool,
  isVisible: PropTypes.bool,
  isExpandable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

BreadcrumbItem.defaultProps = {
  href: '',
  isLastItem: false,
  isVisible: false,
  isExpandable: false,
  className: '',
  children: null,
};

export default BreadcrumbItem;
