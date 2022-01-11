import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icons from '@ecl/resources-ec-icons/dist/sprites/icons.svg';

import styles from './Link.scss';

function StyledLink({ className, standalone, to, label, children, ...props }) {
  const cls = classnames(className, styles.link, {
    [styles.standalone]: standalone,
  });

  if (!to) {
    return null;
  }

  if (to.indexOf('http') === 0) {
    return (
      <a
        {...props}
        href={to}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label || children}&nbsp;
        <svg focusable="false" aria-hidden="true" className={styles.icon}>
          <use xlinkHref={`${icons}#external`} />
        </svg>
      </a>
    );
  }

  return (
    <Link {...props} to={to} className={cls}>
      {label || children}
    </Link>
  );
}

StyledLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  standalone: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string,
};

StyledLink.defaultProps = {
  className: '',
  standalone: false,
  to: '',
  label: '',
};

export default StyledLink;
