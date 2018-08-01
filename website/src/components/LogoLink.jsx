import React from 'react';
import { Link } from 'react-router-dom';

import './LogoLink.css';

const LogoLink = props => (
  <Link {...props} className="tmp-logo-link">
    {props.children}
  </Link>
);

export default LogoLink;
