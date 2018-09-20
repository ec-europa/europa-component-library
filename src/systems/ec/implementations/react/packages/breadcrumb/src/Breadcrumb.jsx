/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';
import Link from '@ecl/ec-react-component-link/Link';

import VanillaBreadcrumb from '@ecl/ec-component-breadcrumb/ec-component-breadcrumb';

import BreadcrumbEllipsis from './BreadcrumbEllipsis';

export const Item = ({ item, className, children }) => (
  <li className={classnames(className, 'ecl-breadcrumb__segment')}>
    <Link {...item} variant="standalone" className="ecl-breadcrumb__link" />
    <Icon
      className="ecl-breadcrumb__icon"
      shape="ui--corner-arrow"
      transform="rotate-90"
      size="xs"
      aria-hidden
    />
  </li>
);

export default class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
    };

    this.breadcrumb = null;
  }

  componentDidMount() {
    this.breadcrumb = VanillaBreadcrumb({
      onExpand: () => {
        this.setState({ expanded: true });
      },
      onCollapse: () => {
        this.setState({ expanded: false });
      },
    });

    // this.breadcrumb.init();
  }

  /*
  componentDidUpdate() {
    if (this.breadcrumb) this.breadcrumb.update();
  }
  */

  componentWillUnmount() {
    if (this.breadcrumb) this.breadcrumb.destroy();
  }

  render() {
    const { label, className, children, ...props } = this.props;

    if (!children) return null;

    const { expanded } = this.state;

    const classNames = classnames(className, {
      'ecl-breadcrumb': true,
    });

    const childrenCount = React.Children.count(children);
    const childrenArray = React.Children.toArray(children);

    const items = [childrenArray[0]];

    // Insert Ellipsis
    if (childrenCount > 3) {
      items.push(<BreadcrumbEllipsis key="ellipsis" />);
    }

    // Insert remaining items
    items.push(...childrenArray.slice(1));

    return (
      <nav {...props} className={classNames} aria-label={label}>
        <div className="ecl-container">
          <ol className="ecl-breadcrumb__container">
            {items}
            {/*}
            <li className="ecl-breadcrumb__segment">
              <Item item={items[0]} />
            </li>
            {items.length > 3 && (
              <Ellipsis />
            )}
            {items.slice(1, -2).map((item, index) => (
              <li
                className="ecl-breadcrumb__segment ecl-breadcrumb__segment--optional"
                key={index} // eslint-disable-line react/no-array-index-key
              >
                <Item item={item} />
              </li>
            ))}
            <li className="ecl-breadcrumb__segment">
              <Item item={items[items.length - 1]} />
            </li>
            <li
              className="ecl-breadcrumb__segment ecl-breadcrumb__current-page"
              aria-current="page"
            >
              Current Page
            </li>

            {React.Children.map(children, child =>
              React.cloneElement(child, {
                className: 'bx--link',
              })
            )}

            */}
          </ol>
        </div>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  className: '',
};
