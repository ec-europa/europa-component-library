/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import iconSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import styles from './DoDont.scss';

const DoDont = ({ itemDo, itemDont }) => (
  <div className={styles.dodont}>
    <div className={styles.do}>
      <div className={styles.image}>
        <img src={itemDo.image} alt={itemDo.alt} />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <svg
            focusable="false"
            aria-hidden="true"
            className={styles.title__icon}
          >
            <use xlinkHref={`${iconSprite}#ui--check-filled`} />
          </svg>
          {itemDo.title}
        </div>
        <div className={styles.description}>{itemDo.description}</div>
      </div>
    </div>

    <div className={styles.dont}>
      <div className={styles.image}>
        <img src={itemDont.image} alt={itemDont.alt} />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <svg
            focusable="false"
            aria-hidden="true"
            className={styles.title__icon}
          >
            <use xlinkHref={`${iconSprite}#ui--close-filled`} />
          </svg>
          {itemDont.title}
        </div>
        <div className={styles.description}>{itemDont.description}</div>
      </div>
    </div>
  </div>
);

DoDont.propTypes = {
  itemDo: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
  }),
  itemDont: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
  }),
};

DoDont.defaultProps = {
  itemDo: {
    title: 'Do',
    image: '',
    alt: '',
    description: '',
  },
  itemDont: {
    title: "Don't",
    image: '',
    alt: '',
    description: '',
  },
};

export default DoDont;
