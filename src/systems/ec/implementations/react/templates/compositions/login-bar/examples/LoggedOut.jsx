import React from 'react';
import Link from '@ecl/ec-react-component-link';

export function LoggedOut() {
  return (
    <div className="ecl-u-bg-grey-5 ecl-u-pv-xs">
      <div className="ecl-container ecl-u-d-flex ecl-u-justify-content-end ecl-u-type-m">
        <Link label="Log in" href="/example" variant="standalone" />
      </div>
    </div>
  );
}

export default LoggedOut;
