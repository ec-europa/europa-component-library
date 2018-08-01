import React from 'react';

import LogoLink from '../components/LogoLink';
import ECLogo from '@ecl/ec-preset-website/dist/images/logo/logo--en.svg';
import EULogo from '@ecl/eu-preset-website/dist/images/logo/logo--en.svg';

const HomePage = () => (
  <main id="main-content" tabIndex="-1" className="tmp-splash-page">
    <div className="custom-container">
      <div className="ecl-editor tmp-splash-page-editor">
        <h1>Component Library</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis
          metus non lectus dignissim, ac viverra elit convallis. Pellentesque
          tempus purus id facilisis lacinia.
        </p>
        <p>
          Nulla consequat suscipit commodo. Fusce sollicitudin orci id volutpat
          tempor. Duis vestibulum, diam vel gravida dapibus, odio velit eleifend
          felis, id elementum dolor nisi id arcu.
        </p>
        <p>Select between the available libraries:</p>
      </div>
      <div className="custom-row tmp-splash-page-actions-row">
        <div className="custom-col-4/4 custom-col-md-4/8 ecl-u-d-flex">
          <LogoLink to="/ec" aria-label="Open EU system">
            <img src={ECLogo} alt="EC Logo" />
          </LogoLink>
        </div>
        <div className="custom-col-4/4 custom-col-md-4/8 ecl-u-d-flex">
          <LogoLink to="/eu" aria-label="Open EU system">
            <img src={EULogo} alt="EU Logo" />
          </LogoLink>
        </div>
      </div>
    </div>
  </main>
);

export default HomePage;
