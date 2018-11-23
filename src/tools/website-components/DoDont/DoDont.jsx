/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './DoDont.scss';

const DoDont = ({
  doTitle,
  doImage,
  doDescription,
  dontTitle,
  dontImage,
  dontDescription,
}) => (
  <div className={styles.container}>
    <div className={styles.do}>
      <div className={styles.image}>
        <img src={doImage} alt={doTitle} />
      </div>
      <div className={styles.title}>{doTitle}</div>
      <div className={styles.description}>{doDescription}</div>
    </div>

    <div className={styles.dont}>
      <div className={styles.image}>
        <img src={dontImage} alt={dontTitle} />
      </div>
      <div className={styles.title}>{dontTitle}</div>
      <div className={styles.description}>{dontDescription}</div>
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
  doTitle: '',
  doImage: '',
  doDescription: '',
  dontTitle: '',
  dontImage: '',
  dontDescription: '',
};

export default DoDont;
