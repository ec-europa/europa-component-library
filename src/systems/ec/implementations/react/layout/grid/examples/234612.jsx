import React from 'react';
import Box from './Box';

export default function () {
  return (
    <div className="ecl-container">
      <div className="ecl-row">
        {new Array(6).fill().map((v, i) => (
          <Box className="ecl-col-2" key={`b2-${i}`} />
        ))}
      </div>
      <div className="ecl-row ecl-u-mt-m">
        {new Array(4).fill().map((v, i) => (
          <Box className="ecl-col-3" key={`b3-${i}`} />
        ))}
      </div>
      <div className="ecl-row ecl-u-mt-m">
        {new Array(3).fill().map((v, i) => (
          <Box className="ecl-col-4" key={`b4-${i}`} />
        ))}
      </div>
      <div className="ecl-row ecl-u-mt-m">
        {new Array(2).fill().map((v, i) => (
          <Box className="ecl-col-6" key={`b5-${i}`} />
        ))}
      </div>
      <div className="ecl-row ecl-u-mt-m">
        <Box className="ecl-col-12" />
      </div>
    </div>
  );
}
