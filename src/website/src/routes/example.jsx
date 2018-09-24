import React from 'react';
import Helmet from 'react-helmet';

import Example from '../components/Example/Example';

const RouteExample = () => (
  <Example>
    <Helmet title="Example page" />
    <h1>Example page</h1>

    <p>
      This page is established to be used for illustrative examples in
      documents.
    </p>
    <p id="go-back">
      {/* eslint-disable-next-line no-script-url, jsx-a11y/anchor-is-valid */}
      <a href="javascript:history.back()" className="ecl-link">
        Go Back
      </a>
    </p>
  </Example>
);

export default RouteExample;
