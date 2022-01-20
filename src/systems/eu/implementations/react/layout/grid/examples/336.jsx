import React from 'react';
import Box from './Box';

export default function () {
  return (
    <div className="ecl-container">
      <div className="ecl-row">
        <Box className="ecl-col-3" />
        <Box className="ecl-col-3" />
        <Box className="ecl-col-6" />
      </div>
    </div>
  );
}
