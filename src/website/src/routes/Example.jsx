import React from 'react';
import { Helmet } from 'react-helmet';

import Example from '../components/Example/Example';

const RouteExample = () => (
  <>
    <Helmet title="Example page" />
    <Example />
  </>
);

export default RouteExample;
