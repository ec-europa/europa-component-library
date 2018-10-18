/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Spacing.scss';

const Spacing = ({ type, token }) => (
  <div className={styles.line}>
    <div className={styles.container}>
      <div className={classnames(styles.content, `ecl-u-m${type}-${token}`)}>
        <span className={styles.item}>
          ecl-u-m
          {type}-{token}
        </span>
      </div>
    </div>

    <div className={styles.container}>
      <div className={classnames(styles.content, `ecl-u-p${type}-${token}`)}>
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
