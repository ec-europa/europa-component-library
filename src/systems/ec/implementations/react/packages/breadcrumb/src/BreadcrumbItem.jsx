/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';
import Link from '@ecl/ec-react-component-link/Link';

const Item = ({ item, className, children, ...props }) => (
  <li {...props} className={classnames(className, 'ecl-breadcrumb__segment')}>
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

Item.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  className: PropTypes.string,
  children: PropTypes.node,
};

Item.defaultProps = {
  item: {},
  className: '',
  children: null,
};

export default Item;
