import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export function SkipLink({ href, label, className, ...props }) {
  const classNames = classnames(className, 'ecl-skip-link');

  return (
    <a {...props} href={href} className={classNames}>
      {label}
    </a>
  );
}

SkipLink.propTypes = {
  href: PropTypes.string,
  label: PropTypes.node,
  className: PropTypes.string,
};

SkipLink.defaultProps = {
  href: '#',
  label: '',
  className: '',
};

export default SkipLink;
