import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link/Link';
import styles from './Thumbnail.scss';

function Thumbnail({ image, link, title }) {
  return (
    <Link className={styles.thumbnail} to={link}>
      <span className={styles.title}>{title}</span>
      <div className={styles.imageContainer}>
        <div className={styles.flexboxCentering}>
          <img
            src={image}
            alt={`Thumbnail of ${title}`}
            className={styles.image}
          />
        </div>
      </div>
    </Link>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
