import React, { PureComponent, createRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Palette.module.scss';

class Palette extends PureComponent {
  constructor(props) {
    super(props);
    this.paletteRef = createRef();
  }

  render() {
    const { children, mode } = this.props;

    return (
      <ol
        ref={this.paletteRef}
        className={classnames(styles.palette, {
          [styles[`mode--${mode}`]]: mode,
        })}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { parentRef: this.paletteRef }),
        )}
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
