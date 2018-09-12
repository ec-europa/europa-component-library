/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './IconCard.scss';

const IconCard = ({ name, svg }) => (
  <li className={classnames(styles.card)}>
    <div className={styles.icon} dangerouslySetInnerHTML={{ __html: svg }} />
    <h3 className={styles.title}>{name}</h3>
  </li>
);

IconCard.propTypes = {
  name: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};

export default IconCard;
