import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconCard.scss';

function IconCard({ name, label, set }) {
  const cardClass = styles.card;
  let family = '';
  if (set === 'flag' || set === 'flag-non-members') family = '-flag';
  if (set === 'social-media') family = '-networks';

  let iconLabel = name;
  if (label !== '') iconLabel = `${name}\n(${label})`;

  return (
    <li className={cardClass}>
      <span className={`wt-icon${family}--${name} ${styles.icon}`} />
      <div className={styles.title}>{iconLabel}</div>
    </li>
  );
}

IconCard.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  set: PropTypes.string,
};

IconCard.defaultProps = {
  set: 'standard',
};

export default IconCard;
