import React from 'react';
import Box from './Box';

export default function () {
  return (
    <div className="ecl-container">
      <div className="ecl-row ecl-u-pt-m">
        <Box className="ecl-col-12 ecl-col-md-4 ecl-col-lg-3" />
        <Box className="ecl-col-12 ecl-col-md-8 ecl-col-lg-9" />
        <Box className="ecl-col-12 ecl-col-sm-6 ecl-col-lg-4" />
        <Box className="ecl-col-12 ecl-col-sm-6 ecl-col-lg-8" />
      </div>
    </div>
  );
}
