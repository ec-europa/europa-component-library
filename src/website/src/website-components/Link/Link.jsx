/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Link.scss';

const StyledLink = ({ className, ...props }) => (
  <Link {...props} className={classnames(className, styles.link)} />
);

StyledLink.propTypes = {
  className: PropTypes.string,
};

StyledLink.defaultProps = {
  className: '',
};

export default StyledLink;
