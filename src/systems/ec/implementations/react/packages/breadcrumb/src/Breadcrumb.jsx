/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VanillaBreadcrumb from '@ecl/ec-component-breadcrumb/ec-component-breadcrumb';

import BreadcrumbEllipsis from './BreadcrumbEllipsis';

export default class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      isItemVisible: [
        true,
        ...React.Children.toArray(props.children)
          .slice(3)
          .map(() => false),
        true,
        true,
      ],
    };

    this.breadcrumb = null;
    this.breadcrumbRef = React.createRef();
    this.handleExpand = this.handleExpand.bind(this);
  }

  componentDidMount() {
    this.breadcrumb = new VanillaBreadcrumb(this.breadcrumbRef.current, {
      onResize: visibilityMap => {
        this.setState({ ...visibilityMap });
      },
      onExpand: () => {
        this.setState({ expanded: true });
      },
    });

    this.breadcrumb.init();
  }

  componentDidUpdate() {
    // if (this.breadcrumb) this.breadcrumb.update();
  }

  componentWillUnmount() {
    if (this.breadcrumb) this.breadcrumb.destroy();
  }

  handleExpand() {
    const { children } = this.props;
    this.setState({
      expanded: true,
      isItemVisible: [...React.Children.map(children, () => true)],
    });
  }

  render() {
    const { label, className, ellipsisLabel, children, ...props } = this.props;
    if (!children) return null;

    const { expanded, isItemVisible } = this.state;

    const classNames = classnames(className, { 'ecl-breadcrumb': true });

    const childrenCount = React.Children.count(children);
    const childrenArray = React.Children.toArray(children);

    const items = [];
    if (childrenCount <= 3) {
      items.push(...childrenArray);
    } else {
      // Insert root
      items.push(
        React.cloneElement(childrenArray[0], { isVisible: isItemVisible[0] })
      );

      // Insert Ellipsis
      items.push(
        <BreadcrumbEllipsis
          label={ellipsisLabel}
          isVisible={!expanded}
          key="ellipsis"
        />
      );

      // Insert remaining items
      const remainingItems = childrenArray.slice(1);

      items.push(
        ...remainingItems.map(
          (item, index) =>
            index === remainingItems.length - 1
              ? React.cloneElement(item, {
                  isLastItem: true,
                  isVisible: expanded || isItemVisible[index + 1],
                })
              : React.cloneElement(item, {
                  isVisible: expanded || isItemVisible[index + 1],
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
        <div className="ecl-container">
          <ol className="ecl-breadcrumb__container" ref={this.breadcrumbRef}>
            {items}
          </ol>
        </div>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  label: PropTypes.string.isRequired,
  ellipsisLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  ellipsisLabel: '',
  className: '',
  children: null,
};
