import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router';

import styles from './LogoLink.module.scss';

const LogoLink = React.memo(({ system, logo, children, ...props }) => (
  <Link
    {...props}
    className={classnames(styles['logo-link'], {
      [styles[`logo-link--${system}`]]: system,
    })}
  >
    {logo ? (
      <span
        className="logo-content"
        dangerouslySetInnerHTML={{ __html: logo }}
      />
    ) : (
      children
    )}
  </Link>
));

LogoLink.propTypes = {
  system: PropTypes.string,
  logo: PropTypes.string,
  children: PropTypes.node,
};

LogoLink.defaultProps = {
  system: 'ec',
  logo: '',
  children: '',
};

export default LogoLink;
