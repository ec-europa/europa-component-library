import React from 'react';
import PropTypes from 'prop-types';

function RemToPixels({ rem }) {
  return (
    <>{rem * parseFloat(getComputedStyle(document.documentElement).fontSize)}</>
  );
}

RemToPixels.propTypes = {
  rem: PropTypes.string.isRequired,
};

export default RemToPixels;
