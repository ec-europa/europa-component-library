import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ClipboardJS from 'clipboard';

import styles from './PaletteItem.scss';

class PaletteItem extends PureComponent {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.clipboard = null;

    const { name, value, ui, main } = props;
    this.color = { name, value, ui, main };
  }

  componentDidMount() {
    const { name } = this.color;
    this.clipboard = new ClipboardJS(`#${name}`);
  }

  componentWillUnmount() {
    if (this.clipboard) this.clipboard.destroy();
  }

  render() {
    const { name, value, ui, main } = this.color;

    return (
      <li
        className={classnames(
          styles.item,
          {
            [styles[`item--${ui}`]]: true,
          },
          { [styles['item--main']]: main },
        )}
        style={{ backgroundColor: value, color: value }}
      >
        <h3 className={styles.title}>{name}</h3>
        <button
          type="button"
          id={name}
          data-clipboard-text={value.toUpperCase()}
          className={styles.button}
        >
          <span className={styles['button-hover-hidden']}>
            {value.toUpperCase()}
          </span>
          <span className={styles['button-hover-only']}>COPY</span>
        </button>
      </li>
    );
  }
}

PaletteItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  ui: PropTypes.string,
  main: PropTypes.bool,
};

PaletteItem.defaultProps = {
  value: '',
  ui: 'light',
  main: false,
};

export default PaletteItem;
