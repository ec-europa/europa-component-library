import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconCard.module.scss';

function IconCard({ name, label, set }) {
  const cardClass = styles.card;
  let family = '-ecl';
  if (set === 'flag') family = '-flags';
  if (set === 'social-media') family = '-networks';

  let iconLabel = name;
  if (label !== '') iconLabel = `${name}\n(${label})`;

  return (
    <li className={cardClass}>
      {set === 'social-media' ? (
        <span className={styles['icon-social']}>
          <span className={`wt-icon${family}--${name} ${styles.icon}`} />
          <span
            className={`wt-icon${family}--${name} wt-icon--inverted ${styles.icon}`}
          />
        </span>
      ) : (
        <span className={`wt-icon${family}--${name} ${styles.icon}`} />
      )}
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
