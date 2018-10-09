import React from 'react';
import Helmet from 'react-helmet';

import PageNotFound from '../components/PageNotFound/PageNotFound';
import mdStyles from '../styles/markdown.scss';

const Route404 = () => (
  <PageNotFound>
    <Helmet title="404 - Page not found" />
    <h1 className={mdStyles.h1}>Page not found</h1>
  </PageNotFound>
);

export default Route404;
