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
    };

    this.breadcrumb = null;
    this.breadcrumbRef = React.createRef();
    this.handleExpand = this.handleExpand.bind(this);
  }

  componentDidMount() {
    this.breadcrumb = VanillaBreadcrumb(this.breadcrumbRef.current, {
      onExpand: () => {
        this.setState({ expanded: true });
      },
      onCollapse: () => {
        this.setState({ expanded: false });
      },
    });

    this.breadcrumb.init();
  }

  componentDidUpdate() {
    if (this.breadcrumb) this.breadcrumb.update();
  }

  componentWillUnmount() {
    if (this.breadcrumb) this.breadcrumb.destroy();
  }

  handleExpand() {
    this.setState({ expanded: true });
  }

  render() {
    const { label, className, ellipsisLabel, children, ...props } = this.props;

    if (!children) return null;

    const { expanded } = this.state;

    const classNames = classnames(className, { 'ecl-breadcrumb': true });

    const childrenCount = React.Children.count(children);
    const childrenArray = React.Children.toArray(children);

    const items = [];
    if (childrenCount <= 3) {
      items.push(...childrenArray);
    } else {
      // Insert root
      items.push(childrenArray[0]);

      // Insert Ellipsis
      items.push(
        <BreadcrumbEllipsis
          label={ellipsisLabel}
          isVisible={!expanded}
          onClick={this.handleExpand}
          key="ellipsis"
        />
      );

      // Insert remaining items
      const remainingItems = childrenArray.slice(1);

      items.push(
        ...remainingItems.map(
          (item, index) =>
            index === remainingItems.length - 1
              ? React.cloneElement(item, { isLastItem: true })
              : item
        )
      );
    }

    return (
      <nav {...props} className={classNames} aria-label={label}>
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
