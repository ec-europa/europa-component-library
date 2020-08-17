import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LogoLink.scss';

const LogoLink = React.memo((props) => (
  <Link {...props} className={styles['logo-link']} />
));

export default LogoLink;
