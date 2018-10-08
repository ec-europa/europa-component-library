import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VanillaBreadcrumb from '@ecl/eu-component-breadcrumb/eu-component-breadcrumb';

import BreadcrumbEllipsis from './BreadcrumbEllipsis';

export default class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);

    const { minItemsLeft, minItemsRight, children } = props;
    const childrenArray = React.Children.toArray(children);

    if (!children) {
      this.state = {};
    } else if (childrenArray.length <= minItemsLeft) {
      this.state = {
        expanded: true,
        isItemVisible: [...children.map(() => true)],
      };
    } else {
      this.state = {
        expanded: false,
        isItemVisible: [
          ...children.slice(0, minItemsLeft).map(() => true),
          ...children.slice(minItemsLeft, -minItemsRight).map(() => false),
          ...children.slice(-minItemsRight).map(() => true),
        ],
      };
    }

    this.breadcrumb = null;
    this.breadcrumbRef = React.createRef();
  }

  componentDidMount() {
    const { minItemsLeft, minItemsRight, children } = this.props;
    const childrenCount = React.Children.count(children);

    if (childrenCount > minItemsLeft + minItemsRight) {
      this.breadcrumb = new VanillaBreadcrumb(this.breadcrumbRef.current, {
        onPartialExpand: isItemVisible => {
          this.setState({ isItemVisible });
        },
        onFullExpand: () => {
          this.setState({ expanded: true });
        },
      });

      this.breadcrumb.init();
    }
  }

  componentWillUnmount() {
    if (this.breadcrumb) this.breadcrumb.destroy();
  }

  render() {
    const {
      label,
      className,
      ellipsisLabel,
      children,
      minItemsLeft,
      minItemsRight,
      ...props
    } = this.props;
    if (!children) return null;

    const { expanded, isItemVisible } = this.state;

    const classNames = classnames(className, 'ecl-breadcrumb');

    const childrenCount = React.Children.count(children);
    const childrenArray = React.Children.toArray(children);

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
        ...leftItems.map(item => React.cloneElement(item, { isVisible: true }))
      );

      // Insert Ellipsis
      items.push(
        <BreadcrumbEllipsis
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
        data-ecl-breadcrumb
      >
        <ol className="ecl-breadcrumb__container" ref={this.breadcrumbRef}>
          {items}
        </ol>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  label: PropTypes.string.isRequired,
  ellipsisLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  minItemsLeft: PropTypes.number,
  minItemsRight: PropTypes.number,
};

Breadcrumb.defaultProps = {
  ellipsisLabel: '',
  className: '',
  children: null,
  minItemsLeft: 1,
  minItemsRight: 2,
};
