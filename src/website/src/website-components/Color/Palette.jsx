import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Palette.scss';

class Palette extends PureComponent {
  render() {
    const { children, mode } = this.props;

    return (
      <ol
        className={classnames(styles.palette, {
          [styles[`mode--${mode}`]]: mode,
        })}
      >
        {React.Children.map(children, (child) => (
          <>{child}</>
        ))}
      </ol>
    );
  }
}

Palette.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.string,
};

Palette.defaultProps = {
  mode: '',
};

export default Palette;
