/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '../Link/Link';
import styles from './Thumbnail.scss';

const Thumbnail = ({ image, link, title, zoom }) => (
  <Link className={styles.thumbnail} to={link}>
    <span className={styles.title}>{title}</span>
    <div className={styles.imageContainer}>
      <div className={styles.flexboxCentering}>
        <img
          src={image}
          alt={`Thumbnail of ${title}`}
          className={classnames(styles.image, {
            [`${styles[`zoom${zoom}`]}`]: zoom,
          })}
        />
      </div>
    </div>
  </Link>
);

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  zoom: PropTypes.string,
};

Thumbnail.defaultProps = {
  zoom: '100',
};

export default Thumbnail;
