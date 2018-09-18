/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon/Icon';
import Link from '@ecl/eu-react-component-link/Link';

import initBreadcrumb from '@ecl/eu-component-breadcrumb/eu-component-breadcrumb';

export default class Breadcrumb extends React.Component {
  componentDidMount() {
    initBreadcrumb().init();
  }

  componentDidUpdate() {
    initBreadcrumb().update();
  }

  render() {
    const { items, label, className, ...props } = this.props;

    const classNames = classnames(className, {
      'ecl-breadcrumb': true,
    });

    return (
      <nav {...props} className={classNames} role="search" aria-label={label}>
        <div className="ecl-container">
          <ol className="ecl-breadcrumb__container">
            {items.map((item, index) => (
              <li
                className={
                  index === 0
                    ? 'ecl-breadcrumb__segment ecl-breadcrumb__segment--first'
                    : 'ecl-breadcrumb__segment'
                }
              >
                <Link
                  {...item}
                  variant="standalone"
                  className="ecl-breadcrumb__link"
                />
                <Icon
                  className="ecl-breadcrumb__icon"
                  shape="ui--corner-arrow"
                  transform="rotate-90"
                  size="xs"
                />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  label: PropTypes.string,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  items: [],
  label: '',
  className: '',
};
