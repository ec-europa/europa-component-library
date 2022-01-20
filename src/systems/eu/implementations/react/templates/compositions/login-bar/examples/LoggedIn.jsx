import React from 'react';
import PropTypes from 'prop-types';
import Link from '@ecl/eu-react-component-link';

export function LoggedIn({ firstname, lastname }) {
  return (
    <div className="ecl-u-bg-grey-5 ecl-u-pv-xs">
      <div className="ecl-container ecl-u-d-flex ecl-u-justify-content-end ecl-u-align-items-center ecl-u-type-m ecl-u-type-color-grey">
        Logged in as {firstname} {lastname}
        <Link
          label="Log out"
          href="/example"
          variant="standalone"
          className="ecl-u-ml-xl ecl-u-flex-shrink-0"
        />
      </div>
    </div>
  );
}

LoggedIn.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};

LoggedIn.defaultProps = {
  firstname: '',
  lastname: '',
};

export default LoggedIn;
