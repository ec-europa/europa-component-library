import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

const NavigationLink = ({ meta, ...props }) => {
  const location = useLocation();

  // Compute the URL only once
  const to = useMemo(
    () => (meta.defaultTab ? `${meta.url}${meta.defaultTab}/` : meta.url),
    [meta]
  );

  // Function to determine if the link is active
  const getActiveClass = ({ isActive }) => {
    console.log(location.pathname);
    console.log(meta.url);
    isActive || location.pathname.startsWith(meta.url) ? "active-class" : "";
  }

  return <NavLink to={to} className={getActiveClass} {...props} />;
};

NavigationLink.propTypes = {
  meta: PropTypes.shape({
    url: PropTypes.string.isRequired,
    defaultTab: PropTypes.string,
  }).isRequired,
};

export default NavigationLink;