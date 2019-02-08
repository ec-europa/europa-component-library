import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon/src/Icon';
import Link from '@ecl/ec-react-component-link/src/Link';

const Item = ({
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
    className={classnames(className, 'ecl-breadcrumb__segment', {
      'ecl-breadcrumb__current-page': isLastItem,
    })}
    {...isLastItem && { 'aria-current': 'page' }}
    data-ecl-breadcrumb-item={isExpandable ? 'expandable' : 'static'}
    aria-hidden={!isVisible}
  >
    {!isLastItem ? (
      <Fragment>
        <Link
          href={href}
          label={label}
          variant="standalone"
          {...isLastItem && { 'aria-current': 'page' }}
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
      </Fragment>
    ) : (
      <Fragment>{label}</Fragment>
    )}
  </li>
);

Item.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  isLastItem: PropTypes.bool,
  isVisible: PropTypes.bool,
  isExpandable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Item.defaultProps = {
  href: '',
  isLastItem: false,
  isVisible: false,
  isExpandable: false,
  className: '',
  children: null,
};

export default Item;
