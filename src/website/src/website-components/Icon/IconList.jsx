import React from 'react';
import PropTypes from 'prop-types';

import icons from '@ecl/resources-icons/list.json';
import iconsFlag from '@ecl/resources-flag-icons/list-eu-member.json';
import iconsFlagNonMembers from '@ecl/resources-flag-icons/list-non-eu-member.json';
import iconsSocialMedia from '@ecl/resources-social-media-icons/list.json';

import IconCard from './IconCard';
import styles from './IconList.scss';

function IconList({ set }) {
  let iconSet = icons;
  if (set === 'flag') iconSet = iconsFlag;
  if (set === 'flag-non-members') iconSet = iconsFlagNonMembers;
  if (set === 'social-media') iconSet = iconsSocialMedia;

  return (
    <ul className={styles.icons}>
      {iconSet.map((icon) => {
        const iconName = icon.name ? icon.name : icon;
        const iconLabel = icon.label ? icon.label : '';
        return <IconCard name={iconName} label={iconLabel} set={set} />;
      })}
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
