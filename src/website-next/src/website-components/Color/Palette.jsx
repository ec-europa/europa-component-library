import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Palette.module.scss';

class Palette extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <ol className={styles.palette}>
        {React.Children.map(children, (child) => (
          <>{child}</>
        ))}
      </ol>
    );
  }
}

Palette.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Palette;
