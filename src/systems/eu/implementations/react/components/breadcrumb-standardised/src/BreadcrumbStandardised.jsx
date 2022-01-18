import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { BreadcrumbStandardisedEllipsis } from './BreadcrumbStandardisedEllipsis';

export function BreadcrumbStandardised({
  label,
  className,
  ellipsisLabel,
  children,
  minItemsLeft,
  minItemsRight,
  ...props
}) {
  if (!children) return null;

  const childrenArray = React.Children.toArray(children);
  let expanded;
  let isItemVisible;

  if (childrenArray.length <= minItemsLeft) {
    expanded = true;
    isItemVisible = [...children.map(() => true)];
  } else {
    expanded = false;
    isItemVisible = [
      ...children.slice(0, minItemsLeft).map(() => true),
      ...children.slice(minItemsLeft, -minItemsRight).map(() => false),
      ...children.slice(-minItemsRight).map(() => true),
    ];
  }

  const classNames = classnames(className, 'ecl-breadcrumb-standardised');

  const childrenCount = React.Children.count(children);

  const items = [];
  if (childrenCount <= minItemsLeft + minItemsRight) {
    items.push(
      ...childrenArray.map((item, index) =>
        React.cloneElement(item, {
          isLastItem: index === childrenArray.length - 1,
          isVisible: true,
        })
      )
    );
  } else {
    // Insert left items
    const leftItems = childrenArray.slice(0, minItemsLeft);
    items.push(
      ...leftItems.map((item) => React.cloneElement(item, { isVisible: true }))
    );

    // Insert Ellipsis
    items.push(
      <BreadcrumbStandardisedEllipsis
        label={ellipsisLabel}
        isVisible={!expanded}
        key="ellipsis"
      />
    );

    // Insert "expandable" items
    const expandableItems = childrenArray.slice(minItemsLeft, -minItemsRight);
    items.push(
      ...expandableItems.map((item, index) =>
        React.cloneElement(item, {
          isVisible: expanded || isItemVisible[index],
          isExpandable: true,
        })
      )
    );

    // Insert right items
    const rightItems = childrenArray.slice(-minItemsRight);
    items.push(
      ...rightItems.map((item, index) =>
        React.cloneElement(item, {
          isLastItem: index === rightItems.length - 1,
          isVisible: true,
        })
      )
    );
  }

  return (
    <nav
      {...props}
      className={classNames}
      aria-label={label}
      data-ecl-breadcrumb-standardised
    >
      <ol className="ecl-breadcrumb-standardised__container">{items}</ol>
    </nav>
  );
}

BreadcrumbStandardised.propTypes = {
  label: PropTypes.string.isRequired,
  ellipsisLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  minItemsLeft: PropTypes.number,
  minItemsRight: PropTypes.number,
};

BreadcrumbStandardised.defaultProps = {
  ellipsisLabel: '',
  className: '',
  children: null,
  minItemsLeft: 1,
  minItemsRight: 2,
};

export default BreadcrumbStandardised;
