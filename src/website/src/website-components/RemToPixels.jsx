import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function RemToPixels({ rem }) {
  const [pixels, setPixels] = useState(0);

  useEffect(() => {
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    setPixels(rem * baseFontSize);
  }, [rem]);

  return <>{pixels}</>;
}

RemToPixels.propTypes = {
  rem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RemToPixels;
