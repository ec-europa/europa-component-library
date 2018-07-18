import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';

const HomePage = () => (
  <Fragment>
    <PageHeader />
    <main>
      <a id="main-content" tabindex="-1" />
      <div class="ecl-container">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link to="/test">Go to test</Link>
          <Link to="/components/button">Go to button</Link>
        </p>
      </div>
    </main>
  </Fragment>
);

export default HomePage;
