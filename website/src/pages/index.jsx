import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <Fragment>
    <main id="main-content" tabIndex="-1">
      <div className="ecl-container ecl-u-pv-xl">
        <div className="ecl-row ecl-u-mt-xl ecl-editor">
          <div class="ecl-col-12">
            <h1>Global Homepage</h1>
          </div>
          <div className="ecl-col-6">
            <p>
              <Link to="/ec">Go to EC system</Link>
            </p>
          </div>
          <div className="ecl-col-6">
            <p>
              <Link to="/eu">Go to EU system</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  </Fragment>
);

export default HomePage;
