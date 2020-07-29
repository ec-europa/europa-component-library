import React from 'react';
import PropTypes from 'prop-types';

const RemToPixels = ({ rem }) => (
  <div>
    {rem * parseFloat(getComputedStyle(document.documentElement).fontSize)}
  </div>
);

RemToPixels.propTypes = {
  rem: PropTypes.string.isRequired,
};

export default RemToPixels;
