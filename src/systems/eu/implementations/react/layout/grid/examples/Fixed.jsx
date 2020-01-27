/* eslint-disable import/no-extraneous-dependencies, react/no-array-index-key */
import React from 'react';
import Box from './Box';

export default () => (
  <div className="ecl-container">
    <div className="ecl-row">
      <Box className="ecl-col-3" />
      <Box className="ecl-col-6" />
      <Box className="ecl-col-3" />
    </div>

    <div className="ecl-row ecl-u-mt-m">
      <Box className="ecl-col-6" />
      <Box className="ecl-col-6" />
    </div>

    <div className="ecl-row ecl-u-mt-m">
      <Box className="ecl-col-9 ecl-offset-3" />
    </div>
  </div>
);
