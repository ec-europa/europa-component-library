import React from 'react';
import PropTypes from 'prop-types';

import styles from './LogoCard.module.scss';

function LogoCard({ path, name, color }) {
  const cardClass =
    color === 'negative' ? styles['card--negative'] : styles.card;

  // If 'path' is an object (JSON), extract the URL from the JSON
  const logoPath = typeof path === 'string' ? path : path?.url;

  return (
    <li className={cardClass}>
      {/* Render the logo image */}
      <img className={styles.logo} alt={name} src={logoPath} />
      <div className={styles.title}>{name}</div>
    </li>
  );
}

LogoCard.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired, // Can be either a string (SVG path) or an object (JSON)
  color: PropTypes.string,
};

LogoCard.defaultProps = {
  color: 'positive',
};

export default LogoCard;
