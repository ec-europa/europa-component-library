import React from 'react';
import Box from './Box';

export default function () {
  return (
    <div className="ecl-container">
      <div className="ecl-row">
        <Box className="ecl-col-2" />
        <Box className="ecl-col-8" />
        <Box className="ecl-col-2" />
      </div>
    </div>
  );
}
