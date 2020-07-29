import React from 'react';
import PropTypes from 'prop-types';

import iconSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import styles from './DoDont.scss';

const Caution = ({ image, alt, title, description }) => (
  <div className={styles.caution}>
    <div className={styles['image-container']}>
      <img src={image} alt={alt} className={styles.image} />
    </div>
    <div className={styles.separator} />
    <div className={styles.container}>
      <div className={styles.title}>
        <svg
          focusable="false"
          aria-hidden="true"
          className={styles.title__icon}
        >
          <use xlinkHref={`${iconSprite}#notifications--warning`} />
        </svg>
        {title}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
);

Caution.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
};

Caution.defaultProps = {
  title: 'Caution',
  image: '',
  alt: '',
  description: '',
};

export default Caution;
