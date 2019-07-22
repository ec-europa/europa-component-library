import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RemToPixels = ({ rem }) => (
  <Fragment>
    {rem * parseFloat(getComputedStyle(document.documentElement).fontSize)}
  </Fragment>
);

RemToPixels.propTypes = {
  rem: PropTypes.string.isRequired,
};

export default RemToPixels;
