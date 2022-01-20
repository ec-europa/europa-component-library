import React from 'react';
import PropTypes from 'prop-types';

import styles from './Media.scss';

const MediaRatio = ({ type, token, ratio }) => (
  <div className="demo-media-line">
    <div className="demo-media-container-left">
      <div
        className={`ecl-u-media-ratio-${ratio} ecl-u-media-${type}-${token}`}
      >
        <img
          src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
          alt="example"
          className="ecl-u-media-content"
        />
      </div>
      <span className={styles.text}>
        ecl-u-media-ratio-
        {ratio}
      </span>
    </div>

    <div className="demo-media-container-right">
      <div
        className={`ecl-u-media-ratio-${ratio} ecl-u-media-${type}-${token}`}
      >
        <div className="demo-media-content ecl-u-media-content" />
      </div>
      <span className={styles.text}>
        ecl-u-media-ratio-
        {ratio}
      </span>
    </div>
  </div>
);

MediaRatio.propTypes = {
  type: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  ratio: PropTypes.string.isRequired,
};

export default MediaRatio;
