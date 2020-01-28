/* eslint-disable import/no-extraneous-dependencies, react/no-array-index-key */
import React from 'react';
import Box from './Box';

export default () => (
  <div className="ecl-container-fluid">
    <h2 className="ecl-u-type-heading-2 ecl-u-mt-none">Columns</h2>
    <div className="ecl-row">
      <Box className="ecl-col-3" />
      <Box className="ecl-col-6" />
      <Box className="ecl-col-3" />
    </div>

    <div className="ecl-row ecl-u-mt-m">
      <Box className="ecl-col-6" />
      <Box className="ecl-col-6" />
    </div>

    <h2 className="ecl-u-type-heading-2">Columns with offset</h2>
    <div className="ecl-row ecl-u-mt-m">
      <Box className="ecl-col-9 ecl-offset-3" />
    </div>

    <h2 className="ecl-u-type-heading-2">Responsive columns</h2>
    <div className="ecl-row ecl-u-mt-m">
      <Box className="ecl-col-12 ecl-col-m-6" />
      <Box className="ecl-col-12 ecl-col-m-6" />
    </div>
  </div>
);
