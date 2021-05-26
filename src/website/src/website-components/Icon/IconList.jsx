import React from 'react';
import PropTypes from 'prop-types';

import icons from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsFlag from '@ecl/resources-flag-icons/dist/lists/flag.json';

import IconCard from './IconCard';
import styles from './IconList.scss';

const IconList = ({ set }) => {
  const iconSet = set === 'flag' ? iconsFlag : icons;
  return (
    <ul className={styles.icons}>
      {iconSet.map((icon) => (
        <IconCard name={icon} key={icon} set={set} />
      ))}
    </ul>
  );
};

IconList.propTypes = {
  set: PropTypes.string,
};

IconList.defaultProps = {
  set: 'standard',
};

export default IconList;
