import React from 'react';
import PropTypes from 'prop-types';

import styles from './Media.scss';

const Media = ({ type, token }) => (
  <div className="demo-media-line">
    <div className="demo-media-container-left">
      <img
        src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
        alt="example"
        className={`ecl-u-media-${type}-${token}`}
      />
      <span className={styles.text}>
        ecl-u-media-
        {type}-{token}
      </span>
    </div>

    <div className="demo-media-container-right">
      <div className={`demo-media-content ecl-u-media-${type}-${token}`} />
      <span className={styles.text}>
        ecl-u-media-
        {type}-{token}
      </span>
    </div>
  </div>
);

Media.propTypes = {
  type: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default Media;
