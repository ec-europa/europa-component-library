/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Link.scss';

const StyledLink = ({ className, to, children, ...props }) => {
  if (!to) {
    return null;
  }

  if (to.indexOf('http') === 0) {
    return (
      <a {...props} href={to} className={classnames(className, styles.link)}>
        {children}
      </a>
    );
  }

  return (
    <Link {...props} to={to} className={classnames(className, styles.link)}>
      {children}
    </Link>
  );
};

StyledLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

StyledLink.defaultProps = {
  className: '',
  to: '',
};

export default StyledLink;
