import React from 'react';
import { Helmet } from 'react-helmet';

import Example from '../components/Example/Example';

function RouteExample() {
  return (
    <>
      <Helmet title="Example page" />
      <Example />
    </>
  );
}

export default RouteExample;
