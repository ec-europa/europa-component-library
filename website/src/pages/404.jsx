import React, { Fragment } from 'react';

import PageHeader from '../components/PageHeader';

const PageNotFound = () => (
  <Fragment>
    <PageHeader />
    <main id="main-content" tabIndex="-1">
      <div className="ecl-container ecl-u-pv-xl">
        <div className="ecl-row ecl-u-mt-xl ecl-editor">
          <h1>Page not found</h1>
        </div>
      </div>
    </main>
  </Fragment>
);

export default PageNotFound;
