import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Paragraph.scss';

function Paragraph({ size, children }) {
  return (
    <p
      className={classnames(styles.paragraph, {
        [styles[`paragraph--${size}`]]: size,
      })}
    >
      {children}
    </p>
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
