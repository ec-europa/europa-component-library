/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Box from './Box';

export default () => (
  <div className="ecl-container">
    <div className="ecl-row">
      <Box className="ecl-col-3" />
      <Box className="ecl-col-3" />
      <Box className="ecl-col-6" />
    </div>
  </div>
);
