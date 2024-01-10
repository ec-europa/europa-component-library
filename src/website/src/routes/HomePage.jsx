import React from 'react';
import '@ecl/theme-ec/_custom-properties.scss';

import SplashPage from '../components/SplashPage/SplashPage';
import Document from '../pages/index.md';

function RouteSplashPage() {
  return (
    <SplashPage>
      <Document />
    </SplashPage>
  );
}

export default RouteSplashPage;
