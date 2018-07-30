import React from 'react';
import Helmet from 'react-helmet';

const PageNotFound = () => (
  <main id="main-content" tabIndex="-1">
    <Helmet title="404 - Page not found" />
    <div className="ecl-container ecl-u-pv-xl">
      <div className="ecl-row ecl-u-mt-xl ecl-editor">
        <h1>Page not found</h1>
      </div>
    </div>
  </main>
);

export default PageNotFound;
