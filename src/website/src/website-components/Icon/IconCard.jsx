import React from 'react';
import PropTypes from 'prop-types';

import icons from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import iconsFlag from '@ecl/resources-flag-icons/dist/sprites/icons-flag.svg';
import styles from './IconCard.scss';

const IconCard = ({ name, set }) => {
  const iconSet = set === 'flag' ? iconsFlag : icons;
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
  name: PropTypes.string.isRequired,
  set: PropTypes.string,
};

IconCard.defaultProps = {
  set: 'standard',
};

export default IconCard;
