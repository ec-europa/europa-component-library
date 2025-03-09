import React from 'react';
import PropTypes from 'prop-types';

import styles from './LogoCard.module.scss';

function LogoCard({ markup, name, color }) {
  const cardClass =
    color === 'negative' ? styles['card--negative'] : styles.card;

  return (
    <li className={cardClass}>
      <div className={styles.logo} dangerouslySetInnerHTML={{ __html: markup }} />
      <div className={styles.title}>{name}</div>
    </li>
  );
}

LogoCard.propTypes = {
  name: PropTypes.string.isRequired,
  markup: PropTypes.string.isRequired,
  color: PropTypes.string,
};

LogoCard.defaultProps = {
  color: 'positive',
};

export default LogoCard;
