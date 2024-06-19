import React from 'react';
import PropTypes from 'prop-types';

import icons from '@ecl/resources-icons/dist/sprites/icons.svg';
import iconsFlag from '@ecl/resources-flag-icons/dist/sprites/icons-flag.svg';
import iconsFlagNonMembers from '@ecl/resources-flag-icons/dist/sprites/icons-flag-non-members.svg';
import iconsSocialMedia from '@ecl/resources-social-media-icons/dist/sprites/icons-social-media.svg';
import styles from './IconCard.scss';

function IconCard({ name, set }) {
  let cardClass = styles.card;
  let iconSet = icons;
  if (set === 'flag') iconSet = iconsFlag;
  if (set === 'flag-non-members') iconSet = iconsFlagNonMembers;
  if (set === 'social-media') {
    iconSet = iconsSocialMedia;
    cardClass = name.includes('-negative')
      ? styles['card--negative']
      : styles['card--light'];
  }

  return (
    <li className={cardClass}>
      <svg focusable="false" aria-hidden="true" className={styles.icon}>
        <use xlinkHref={`${iconSet}#${name}`} />
      </svg>
      <div className={styles.title}>{name}</div>
    </li>
  );
}

IconCard.propTypes = {
  name: PropTypes.string.isRequired,
  set: PropTypes.string,
};

IconCard.defaultProps = {
  set: 'standard',
};

export default IconCard;
