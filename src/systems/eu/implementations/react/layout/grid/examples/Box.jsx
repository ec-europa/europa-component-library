import React from 'react';
import PropTypes from 'prop-types';

function Box({ className }) {
  return (
    <div className={className}>
      <div className="ecl-u-pa-xs ecl-u-bg-blue-25 ecl-u-border-all ecl-u-border-color-blue ecl-u-type-color-blue ecl-u-type-l ecl-u-type-bold">
        {className
          .split(' ')
          .filter((str) => str)
          .map((str) => `.${str}`)
          .join(' ')}
      </div>
    </div>
  );
}

Box.propTypes = {
  className: PropTypes.string,
};

Box.defaultProps = {
  className: '',
};

export default Box;
