import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link/Link';

const Pager = ({ links, className, ...props }) => {
  const classNames = classnames(className, 'ecl-pager');

  return (
    <nav {...props} className={classNames}>
      Pager
    </nav>
  );
};

Pager.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  className: PropTypes.string,
};

Pager.defaultProps = {
  links: [],
  className: '',
};

export default Pager;
