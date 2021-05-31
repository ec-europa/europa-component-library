import React from 'react';
import PropTypes from 'prop-types';

import iconsEC from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import iconsEU from '@ecl/resources-eu-icons/dist/sprites/icons.svg';
import iconsFlag from '@ecl/resources-flag-icons/dist/sprites/icons-flag.svg';
import iconsSocialMedia from '@ecl/resources-social-media-icons/dist/sprites/icons-social-media.svg';
import styles from './IconCard.scss';

const IconCard = ({ system, name, set }) => {
  let iconSet = system === 'eu' ? iconsEU : iconsEC;
  if (set === 'flag') iconSet = iconsFlag;
  if (set === 'social-media') iconSet = iconsSocialMedia;

  return (
    <li className={styles.card}>
      <svg focusable="false" aria-hidden="true" className={styles.icon}>
        <use xlinkHref={`${iconSet}#${name}`} />
      </svg>
      <h3 className={styles.title}>{name}</h3>
    </li>
  );
};

IconCard.propTypes = {
  system: PropTypes.string,
  name: PropTypes.string.isRequired,
  set: PropTypes.string,
};

IconCard.defaultProps = {
  system: 'ec',
  set: 'standard',
};

export default IconCard;
