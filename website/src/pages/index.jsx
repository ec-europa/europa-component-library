import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <main id="main-content" tabIndex="-1">
    <div className="custom-container ecl-u-pv-xl">
      <div className="custom-row ecl-u-mt-xl ecl-editor">
        <div className="custom-col-4/4">
          <h1>Splash page</h1>
        </div>
        <div className="custom-col-2/4">
          <p>
            <Link to="/ec">Explore EC system</Link>
          </p>
        </div>
        <div className="custom-col-2/4">
          <p>
            <Link to="/eu">Explore EU system</Link>
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default HomePage;
