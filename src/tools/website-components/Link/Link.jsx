import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Link.scss';

const StyledLink = props => <Link {...props} className={styles.link} />;

export default StyledLink;
