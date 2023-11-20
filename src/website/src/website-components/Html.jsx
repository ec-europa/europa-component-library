import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Html({ markup, extraClasses }) {
  const [html, setHtml] = useState(null);

  useEffect(() => {
    markup.then((resolvedMarkup) => {
      setHtml(resolvedMarkup);
    });
  }, [markup]);

  if (!html) {
    return null;
  }

  return (
    <div className={extraClasses} dangerouslySetInnerHTML={{ __html: html }} />
  ); // eslint-disable-line react/no-danger
}

Html.propTypes = {
  markup: PropTypes.instanceOf(Promise).isRequired,
  extraClasses: PropTypes.string,
};

Html.defaultProps = {
  extraClasses: '',
};

export default Html;
