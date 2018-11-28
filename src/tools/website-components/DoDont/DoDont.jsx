/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import iconSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import styles from './DoDont.scss';

const DoDont = ({
  doTitle,
  doImage,
  doDescription,
  dontTitle,
  dontImage,
  dontDescription,
}) => (
  <div className={styles.dodont}>
    <div className={styles.do}>
      <div className={styles.image}>
        <img src={doImage} alt={doTitle} />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <svg className={styles.title__icon}>
            <use xlinkHref={`${iconSprite}#notifications--success`} />
          </svg>
          {doTitle}
        </div>
        <div className={styles.description}>{doDescription}</div>
      </div>
    </div>

    <div className={styles.dont}>
      <div className={styles.image}>
        <img src={dontImage} alt={dontTitle} />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <svg className={styles.title__icon}>
            <use xlinkHref={`${iconSprite}#notifications--error`} />
          </svg>
          {dontTitle}
        </div>
        <div className={styles.description}>{dontDescription}</div>
      </div>
    </div>
  </div>
);

DoDont.propTypes = {
  doTitle: PropTypes.string,
  doImage: PropTypes.string,
  doDescription: PropTypes.string,
  dontTitle: PropTypes.string,
  dontImage: PropTypes.string,
  dontDescription: PropTypes.string,
};

DoDont.defaultProps = {
  doTitle: 'Do',
  doImage: '',
  doDescription: '',
  dontTitle: "Don't",
  dontImage: '',
  dontDescription: '',
};

export default DoDont;
