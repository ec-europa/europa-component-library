import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Html({ markup }) {
  const [html, setHtml] = useState(null);

  useEffect(() => {
    markup.then((resolvedMarkup) => {
      setHtml(resolvedMarkup);
    });
  }, [markup]);

  if (!html) {
    return null;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />; // eslint-disable-line react/no-danger
}

Html.propTypes = {
  markup: PropTypes.instanceOf(Promise).isRequired,
};

export default Html;
