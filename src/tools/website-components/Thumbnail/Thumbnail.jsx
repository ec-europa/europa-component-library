/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link/Link';
import styles from './Thumbnail.scss';

const Thumbnail = ({ image, link, title }) => (
  <Link className={styles.thumbnail} to={link}>
    <span className={styles.title}>{title}</span>
    <img src={image} alt={`Thumbnail of ${title}`} className={styles.image} />
  </Link>
);

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
