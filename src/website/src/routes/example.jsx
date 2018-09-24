import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Example from '../components/Example/Example';

const RouteExample = () => (
  <Fragment>
    <Helmet title="Example page" />
    <Example />
  </Fragment>
);

export default RouteExample;
