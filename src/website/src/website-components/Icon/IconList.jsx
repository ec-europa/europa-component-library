import React from 'react';
import PropTypes from 'prop-types';

import iconsEC from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsEU from '@ecl/resources-eu-icons/dist/lists/all.json';
import iconsFlag from '@ecl/resources-flag-icons/dist/lists/flag.json';

import IconCard from './IconCard';
import styles from './IconList.scss';

const IconList = ({ system, set }) => {
  const iconSystem = system === 'eu' ? iconsEU : iconsEC;
  const iconSet = set === 'flag' ? iconsFlag : iconSystem;
  return (
    <ul className={styles.icons}>
      {iconSet.map((icon) => (
        <IconCard name={icon} key={icon} set={set} system={system} />
      ))}
    </ul>
  );
};

IconList.propTypes = {
  system: PropTypes.string,
  set: PropTypes.string,
};

IconList.defaultProps = {
  system: 'ec',
  set: 'standard',
};

export default IconList;
