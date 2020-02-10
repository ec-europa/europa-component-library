import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Stats from '../components/Stats/Stats';

const RouteStats = () => (
  <Fragment>
    <Helmet title="Stats page" />
    <Stats />
  </Fragment>
);

export default RouteStats;
