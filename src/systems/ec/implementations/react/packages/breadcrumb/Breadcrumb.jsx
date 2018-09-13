/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';
import Link from '@ecl/ec-react-component-link/Link';

const Breadcrumb = ({ items, label, className, ...props }) => {
  const classNames = classnames(className, {
    'ecl-breadcrumb': true,
  });

  return (
    <nav {...props} className={classNames} role="search" aria-label={label}>
      <ol className="ecl-breadcrumb__container">
        {items.map(item => (
          <li className="ecl-breadcrumb__segment">
            <Link
              {...item}
              variant="standalone"
              className="ecl-breadcrumb__link"
            />
            <Icon
              className="ecl-breadcrumb__icon"
              icon="Icon_Corner-arrow-right"
            />
          </li>
        ))}
      </ol>
    </nav>
  );
};

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

export default Breadcrumb;
