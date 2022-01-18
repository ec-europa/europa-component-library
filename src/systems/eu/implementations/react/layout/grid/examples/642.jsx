import React from 'react';
import Box from './Box';

export default function () {
  return (
    <div className="ecl-container">
      <div className="ecl-row">
        <Box className="ecl-col-6" />
        <Box className="ecl-col-4" />
        <Box className="ecl-col-2" />
      </div>
    </div>
  );
}
