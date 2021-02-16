import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './LogoLink.scss';

const LogoLink = React.memo(({ system, ...props }) => (
  <Link
    {...props}
    className={classnames(styles['logo-link'], {
      [styles[`logo-link--${system}`]]: system,
    })}
  />
));

LogoLink.propTypes = {
  system: PropTypes.string,
};

LogoLink.defaultProps = {
  system: 'ec',
};

export default LogoLink;
