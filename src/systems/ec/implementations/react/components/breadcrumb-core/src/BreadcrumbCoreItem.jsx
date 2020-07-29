import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';

export const BreadcrumbCoreItem = ({
  href,
  label,
  isLastItem,
  isVisible,
  isExpandable,
  className,
  children,
  ...props
}) => (
  <li
    {...props}
    className={classnames(className, 'ecl-breadcrumb-core__segment', {
      'ecl-breadcrumb-core__current-page': isLastItem,
    })}
    {...(isLastItem && { 'aria-current': 'page' })}
    data-ecl-breadcrumb-core-item={isExpandable ? 'expandable' : 'static'}
    aria-hidden={!isVisible}
  >
    {!isLastItem ? (
      <>
        <Link
          href={href}
          label={label}
          variant="standalone"
          {...(isLastItem && { 'aria-current': 'page' })}
          className="ecl-breadcrumb-core__link"
        />
        <Icon
          className="ecl-breadcrumb-core__icon"
          shape="ui--corner-arrow"
          transform="rotate-90"
          size="2xs"
          role="presentation"
          aria-hidden
        />
      </>
    ) : (
      <>{label}</>
    )}
  </li>
);

BreadcrumbCoreItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  isLastItem: PropTypes.bool,
  isVisible: PropTypes.bool,
  isExpandable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

BreadcrumbCoreItem.defaultProps = {
  href: '',
  isLastItem: false,
  isVisible: false,
  isExpandable: false,
  className: '',
  children: null,
};

export default BreadcrumbCoreItem;
