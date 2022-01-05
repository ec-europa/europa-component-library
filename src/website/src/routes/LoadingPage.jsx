import React from 'react';
import { Helmet } from 'react-helmet';

import PageNotFound from '../components/PageNotFound/PageNotFound';
import mdStyles from '../styles/markdown.scss';

function LoadingPage() {
  return (
    <PageNotFound>
      <Helmet title="Loading" />
      <h1 className={mdStyles.h1}>Loading...</h1>
    </PageNotFound>
  );
}

export default LoadingPage;
