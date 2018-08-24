import React from 'react';
import PropTypes from 'prop-types';

import TextContainer from '../TextContainer/TextContainer';
import utilities from '../../styles/utilities.scss';

const PageNotFound = ({ children }) => (
  <main id="main-content" tabIndex="-1">
    <div className={`custom-container ${utilities['pv-xl']}`}>
      <div className={`custom-row ${utilities['mt-xl']}`}>
        <TextContainer>{children}</TextContainer>
      </div>
    </div>
  </main>
);

PageNotFound.propTypes = {
  children: PropTypes.node,
};

PageNotFound.defaultProps = {
  children: null,
};

export default PageNotFound;
