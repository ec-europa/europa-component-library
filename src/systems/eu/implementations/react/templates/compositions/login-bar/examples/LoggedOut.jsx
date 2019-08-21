import React from 'react';
import Link from '@ecl/eu-react-component-link';

export const LoggedOut = () => (
  <div className="ecl-u-bg-grey-5 ecl-u-pv-xs">
    <div className="ecl-container ecl-u-d-flex ecl-u-justify-content-end ecl-u-type-m">
      <Link label="Log in" href="/example" variant="standalone" />
    </div>
  </div>
);

export default LoggedOut;
