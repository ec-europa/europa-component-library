import React from 'react';
import Box from './Box';

export default function () {
  return (
    <div className="ecl-container">
      <div className="ecl-row">
        <Box className="ecl-col-4" />
      </div>
      <div className="ecl-row ecl-u-mt-m">
        <Box className="ecl-col-4 ecl-offset-4" />
      </div>
      <div className="ecl-row ecl-u-mt-m">
        <Box className="ecl-col-4 ecl-offset-8" />
      </div>
    </div>
  );
}
