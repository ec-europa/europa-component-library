import React from 'react';

import Container from '../Grid/Container';
import mdStyles from '../../styles/markdown.scss';
import styles from './Example.scss';
import utilityStyles from '../../styles/utilities.scss';

const handleClick = () => window.history.back();

const Example = React.memo(() => (
  <main id="main-content" tabIndex="-1">
    <Container spacing="pv-xl">
      {' '}
      <h1 className={mdStyles.h1}>Example page</h1>
      <p className={mdStyles.p}>
        This page is established to be used for illustrative examples in
        documents.
      </p>
      <button
        type="button"
        onClick={handleClick}
        className={`${styles.button} ${utilityStyles['mt-l']}`}
      >
        Go Back
      </button>
    </Container>
  </main>
));

export default Example;
