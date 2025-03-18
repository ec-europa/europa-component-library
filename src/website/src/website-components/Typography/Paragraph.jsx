import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Paragraph.module.scss';

function Paragraph({ size, children }) {
  return (
    <div
      className={classnames(styles.paragraph, {
        [styles[`paragraph--${size}`]]: size,
      })}
    >
      {children}
    </div>
  );
}

Paragraph.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

Paragraph.defaultProps = {
  size: '',
  children: null,
};

export default Paragraph;
