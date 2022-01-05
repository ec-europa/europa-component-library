import React from 'react';
import PropTypes from 'prop-types';

import Do from './Do';
import Dont from './Dont';
import styles from './DoDont.scss';

function DoDont({ itemDo, itemDont }) {
  return (
    <div className={styles.dodont}>
      <Do {...itemDo} />
      <Dont {...itemDont} />
    </div>
  );
}

DoDont.propTypes = {
  itemDo: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
  }),
  itemDont: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
  }),
};

DoDont.defaultProps = {
  itemDo: {
    title: 'Do',
    image: '',
    alt: '',
    description: '',
  },
  itemDont: {
    title: "Don't",
    image: '',
    alt: '',
    description: '',
  },
};

export default DoDont;
