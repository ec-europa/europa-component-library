/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Spacing.scss';

const Spacing = ({ type, token }) => (
  <div className="demo-spacing-line">
    <div className="demo-spacing-container">
      <div className={`demo-spacing-content ecl-u-m${type}-${token}`}>
        <span className="demo-spacing-item">
          ecl-u-m
          {type}-{token}
        </span>
      </div>
    </div>

    <div className="demo-spacing-container">
      <div className={`demo-spacing-content ecl-u-p${type}-${token}`}>
        <span className={styles.item}>
          ecl-u-p
          {type}-{token}
        </span>
      </div>
    </div>
  </div>
);

Spacing.propTypes = {
  type: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default Spacing;
