import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavigationLink({ meta, ...props }) {
  // Compute the URL only once
  const to = useMemo(
    () => (meta.defaultTab ? `${meta.url}${meta.defaultTab}/` : meta.url),
    [meta],
  );

  return <NavLink to={to} {...props} />;
}

NavigationLink.propTypes = {
  meta: PropTypes.shape({
    url: PropTypes.string.isRequired,
    defaultTab: PropTypes.string,
  }).isRequired,
};

export default NavigationLink;
