import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ markup }) => {
  // leaving some room for corporate-specific manipulation of the markup here
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: markup,
      }}
    />
  );
};

Html.propTypes = {
  markup: PropTypes.string,
};

Html.defaultProps = {
  markup: '',
};

export default Html;
