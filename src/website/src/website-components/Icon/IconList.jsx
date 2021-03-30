import React, { PureComponent } from 'react';

import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';

import IconCard from './IconCard';
import styles from './IconList.scss';

class IconList extends PureComponent {
  render() {
    return (
      <ul className={styles.icons}>
        {iconsAllEc.map((icon) => (
          <IconCard name={icon} key={icon} />
        ))}
      </ul>
    );
  }
}

export default IconList;
