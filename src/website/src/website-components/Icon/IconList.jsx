import React from 'react';
import PropTypes from 'prop-types';

import icons from '@ecl/resources-icons/dist/lists/all.json';
import iconsFlag from '@ecl/resources-flag-icons/dist/lists/members/all.json';
import iconsFlagNonMembers from '@ecl/resources-flag-icons/dist/lists/non-members/all.json';
import iconsSocialMedia from '@ecl/resources-social-media-icons/dist/lists/social-media.json';

import IconCard from './IconCard';
import styles from './IconList.scss';

function IconList({ set }) {
  let iconSet = icons;
  if (set === 'flag') iconSet = iconsFlag;
  if (set === 'flag-non-members') iconSet = iconsFlagNonMembers;
  if (set === 'social-media') iconSet = iconsSocialMedia;

  return (
    <ul className={styles.icons}>
      {iconSet.map((icon) => (
        <IconCard name={icon} key={icon} set={set} />
      ))}
    </ul>
  );
}

IconList.propTypes = {
  set: PropTypes.string,
};

IconList.defaultProps = {
  set: 'standard',
};

export default IconList;
