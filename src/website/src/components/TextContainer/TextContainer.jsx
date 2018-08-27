import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextContainer.scss';

const TextContainer = ({ children }) => (
  <div className={styles.text}>{children}</div>
);

TextContainer.propTypes = {
  children: PropTypes.node,
};

TextContainer.defaultProps = {
  children: null,
};

export default TextContainer;
