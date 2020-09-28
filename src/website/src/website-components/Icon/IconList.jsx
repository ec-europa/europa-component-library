import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import IconCard from './IconCard';
import styles from './IconList.scss';

const ecIcons = require.context(
  '!raw-loader!../../../../resources/icons/dist/svg',
  true,
  /^\.\/.*\.svg$/
);

class IconList extends PureComponent {
  render() {
    const { set } = this.props;
    return (
      <ul className={styles.icons}>
        {ecIcons
          .keys()
          .filter(
            (icon) =>
              icon.indexOf('/_') === -1 &&
              (!set || icon.indexOf(`./${set}`) === 0)
          )
          .map((icon) => (
            <IconCard
              name={icon.split('/').pop().split('.svg')[0]}
              svg={ecIcons(icon).default}
              key={icon}
            />
          ))}
      </ul>
    );
  }
}

IconList.propTypes = {
  set: PropTypes.string,
};

IconList.defaultProps = {
  set: '',
};

export default IconList;
