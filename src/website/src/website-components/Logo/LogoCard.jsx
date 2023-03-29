import React from 'react';
import PropTypes from 'prop-types';

import styles from './LogoCard.scss';

function LogoCard({ path, name, color }) {
  const cardClass =
    color === 'negative' ? styles['card--negative'] : styles.card;

  return (
    <li className={cardClass}>
      <img className={styles.logo} alt={name} src={path.default} />
      <p className={styles.title}>{name}</p>
    </li>
  );
}

LogoCard.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.oneOfType([PropTypes.object]).isRequired,
  color: PropTypes.string,
};

LogoCard.defaultProps = {
  color: 'positive',
};

export default LogoCard;
