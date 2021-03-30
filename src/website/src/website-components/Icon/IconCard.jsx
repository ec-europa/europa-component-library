import React from 'react';
import PropTypes from 'prop-types';

import icons from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import styles from './IconCard.scss';

const IconCard = ({ name }) => (
  <li className={styles.card}>
    <svg focusable="false" aria-hidden="true" className={styles.icon}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
    <h3 className={styles.title}>{name}</h3>
  </li>
);

IconCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default IconCard;
